import * as cdk from "@aws-cdk/core";
import * as ecs from "@aws-cdk/aws-ecs";
import * as elb from "@aws-cdk/aws-elasticloadbalancingv2";

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const cluster = new ecs.Cluster(this, "SampleCluster", {
      clusterName: "SmapleCluster"
    });

    const taskDefinition = new ecs.FargateTaskDefinition(this, "TaskDef");

    const container = taskDefinition.addContainer("DefaultContainer", {
      image: ecs.ContainerImage.fromAsset("../app"),
      memoryLimitMiB: 512,
      cpu: 256
    });

    container.addPortMappings({
      containerPort: 3000
    });

    const ecsService = new ecs.FargateService(this, "Service", {
      cluster,
      taskDefinition,
      desiredCount: 2
    });

    const lb = new elb.ApplicationLoadBalancer(this, "LB", {
      vpc: cluster.vpc,
      internetFacing: true
    });

    const listener = lb.addListener("Listener", { port: 80 });

    const targetGroup = listener.addTargets("ECS", {
      protocol: elb.ApplicationProtocol.HTTP,
      port: 3000,
      targets: [ecsService]
    });

    new cdk.CfnOutput(this, "LoadBalancerDNS", {
      value: lb.loadBalancerDnsName
    });
  }
}
