# policy-reporter

![Version: 2.7.0-bb.0](https://img.shields.io/badge/Version-2.7.0--bb.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.4.0](https://img.shields.io/badge/AppVersion-2.4.0-informational?style=flat-square)

Policy Reporter watches for PolicyReport Resources.
It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord

## Upstream References
* <https://kyverno.github.io/policy-reporter>

* <https://github.com/kyverno/policy-reporter>

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install policy-reporter chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| image.registry | string | `"ghcr.io"` |  |
| image.repository | string | `"kyverno/policy-reporter"` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.tag | string | `"2.4.0"` |  |
| imagePullSecrets | list | `[]` |  |
| replicaCount | int | `1` |  |
| deploymentStrategy | object | `{}` |  |
| annotations | object | `{}` |  |
| rbac.enabled | bool | `true` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.name | string | `""` |  |
| service.enabled | bool | `true` |  |
| service.annotations | object | `{}` |  |
| service.labels | object | `{}` |  |
| service.type | string | `"ClusterIP"` |  |
| service.port | int | `8080` |  |
| podSecurityContext.fsGroup | int | `1234` |  |
| securityContext.runAsUser | int | `1234` |  |
| securityContext.runAsNonRoot | bool | `true` |  |
| securityContext.privileged | bool | `false` |  |
| securityContext.allowPrivilegeEscalation | bool | `false` |  |
| securityContext.readOnlyRootFilesystem | bool | `true` |  |
| securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| podAnnotations | object | `{}` |  |
| podLabels | object | `{}` |  |
| resources | object | `{}` |  |
| networkPolicy.enabled | bool | `false` |  |
| networkPolicy.egress[0].to | string | `nil` |  |
| networkPolicy.egress[0].ports[0].protocol | string | `"TCP"` |  |
| networkPolicy.egress[0].ports[0].port | int | `6443` |  |
| networkPolicy.ingress | list | `[]` |  |
| rest.enabled | bool | `false` |  |
| metrics.enabled | bool | `false` |  |
| reportFilter.namespaces.include | list | `[]` |  |
| reportFilter.namespaces.exclude | list | `[]` |  |
| reportFilter.clusterReports.disabled | bool | `false` |  |
| ui.enabled | bool | `false` |  |
| kyvernoPlugin.enabled | bool | `false` |  |
| monitoring.enabled | bool | `false` |  |
| global.plugins.kyverno | bool | `false` |  |
| global.backend | string | `""` |  |
| global.port | int | `8080` |  |
| global.fullnameOverride | string | `""` |  |
| global.labels | object | `{}` |  |
| policyPriorities | object | `{}` |  |
| existingTargetConfig.enabled | bool | `false` |  |
| existingTargetConfig.name | string | `""` |  |
| existingTargetConfig.subPath | string | `""` |  |
| target.loki.host | string | `""` |  |
| target.loki.minimumPriority | string | `""` |  |
| target.loki.sources | list | `[]` |  |
| target.loki.skipExistingOnStartup | bool | `true` |  |
| target.loki.customLabels | object | `{}` |  |
| target.elasticsearch.host | string | `""` |  |
| target.elasticsearch.index | string | `""` |  |
| target.elasticsearch.rotation | string | `""` |  |
| target.elasticsearch.minimumPriority | string | `""` |  |
| target.elasticsearch.sources | list | `[]` |  |
| target.elasticsearch.skipExistingOnStartup | bool | `true` |  |
| target.slack.webhook | string | `""` |  |
| target.slack.minimumPriority | string | `""` |  |
| target.slack.sources | list | `[]` |  |
| target.slack.skipExistingOnStartup | bool | `true` |  |
| target.discord.webhook | string | `""` |  |
| target.discord.minimumPriority | string | `""` |  |
| target.discord.sources | list | `[]` |  |
| target.discord.skipExistingOnStartup | bool | `true` |  |
| target.teams.webhook | string | `""` |  |
| target.teams.minimumPriority | string | `""` |  |
| target.teams.sources | list | `[]` |  |
| target.teams.skipExistingOnStartup | bool | `true` |  |
| target.ui.host | string | `""` |  |
| target.ui.minimumPriority | string | `"warning"` |  |
| target.ui.sources | list | `[]` |  |
| target.ui.skipExistingOnStartup | bool | `true` |  |
| target.s3.accessKeyID | string | `""` |  |
| target.s3.secretAccessKey | string | `""` |  |
| target.s3.region | string | `""` |  |
| target.s3.endpoint | string | `""` |  |
| target.s3.bucket | string | `""` |  |
| target.s3.prefix | string | `""` |  |
| target.s3.minimumPriority | string | `""` |  |
| target.s3.sources | list | `[]` |  |
| target.s3.skipExistingOnStartup | bool | `true` |  |
| nodeSelector | object | `{}` |  |
| tolerations | list | `[]` |  |
| affinity | object | `{}` |  |
| livenessProbe.httpGet.path | string | `"/ready"` |  |
| livenessProbe.httpGet.port | string | `"http"` |  |
| readinessProbe.httpGet.path | string | `"/healthz"` |  |
| readinessProbe.httpGet.port | string | `"http"` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| openshift | bool | `false` |  |
| istio.enabled | bool | `false` |  |
| istio.mtls.mode | string | `"STRICT"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_grafana_url | string | `"http://monitoring-grafana.monitoring.svc.cluster.local"` |  |
| bbtests.cypress.envs.cypress_prometheus_url | string | `"http://monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090"` |  |
| bbtests.cypress.envs.cypress_reporter_ns | string | `"kyverno-reporter"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
# kyvernoPlugin

![Version: 1.2.1](https://img.shields.io/badge/Version-1.2.1-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.2.1](https://img.shields.io/badge/AppVersion-1.2.1-informational?style=flat-square)

Policy Reporter Kyverno Plugin

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install kyvernoPlugin chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| image.registry | string | `"registry1.dso.mil"` |  |
| image.repository | string | `"ironbank/nirmata/policy-reporter/policy-reporter-kyverno-plugin"` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.tag | string | `"1.2.1"` |  |
| imagePullSecrets | list | `[]` |  |
| replicaCount | int | `1` |  |
| deploymentStrategy | object | `{}` |  |
| annotations | object | `{}` |  |
| rbac.enabled | bool | `true` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.name | string | `""` |  |
| service.enabled | bool | `true` |  |
| service.annotations | object | `{}` |  |
| service.labels | object | `{}` |  |
| service.type | string | `"ClusterIP"` |  |
| securityContext.runAsUser | int | `1234` |  |
| securityContext.runAsNonRoot | bool | `true` |  |
| securityContext.privileged | bool | `false` |  |
| securityContext.allowPrivilegeEscalation | bool | `false` |  |
| securityContext.readOnlyRootFilesystem | bool | `true` |  |
| securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| podAnnotations | object | `{}` |  |
| podLabels | object | `{}` |  |
| resources | object | `{}` |  |
| nodeSelector | object | `{}` |  |
| tolerations | list | `[]` |  |
| affinity | object | `{}` |  |
| rest.enabled | bool | `true` |  |
| metrics.enabled | bool | `true` |  |
| networkPolicy.enabled | bool | `false` |  |
| networkPolicy.egress[0].to | string | `nil` |  |
| networkPolicy.egress[0].ports[0].protocol | string | `"TCP"` |  |
| networkPolicy.egress[0].ports[0].port | int | `6443` |  |
| networkPolicy.ingress | list | `[]` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
# monitoring

![Version: 2.2.0](https://img.shields.io/badge/Version-2.2.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.0.0](https://img.shields.io/badge/AppVersion-0.0.0-informational?style=flat-square)

Policy Reporter Monitoring with predefined ServiceMonitor and Grafana Dashboards

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install monitoring chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| plugins.kyverno | bool | `false` |  |
| serviceMonitor.namespace | string | `nil` |  |
| serviceMonitor.labels | object | `{}` |  |
| serviceMonitor.relabelings | list | `[]` |  |
| serviceMonitor.metricRelabelings | list | `[]` |  |
| kyverno.serviceMonitor.relabelings | list | `[]` |  |
| kyverno.serviceMonitor.metricRelabelings | list | `[]` |  |
| grafana.namespace | string | `nil` |  |
| grafana.dashboards.enabled | bool | `true` |  |
| grafana.dashboards.label | string | `"grafana_dashboard"` |  |
| grafana.folder.annotation | string | `"grafana_folder"` |  |
| grafana.folder.name | string | `"Policy Reporter"` |  |
| policyReportDetails.firstStatusRow.height | int | `8` |  |
| policyReportDetails.secondStatusRow.enabled | bool | `true` |  |
| policyReportDetails.secondStatusRow.height | int | `2` |  |
| policyReportDetails.statusTimeline.enabled | bool | `true` |  |
| policyReportDetails.statusTimeline.height | int | `8` |  |
| policyReportDetails.passTable.enabled | bool | `true` |  |
| policyReportDetails.passTable.height | int | `8` |  |
| policyReportDetails.failTable.enabled | bool | `true` |  |
| policyReportDetails.failTable.height | int | `8` |  |
| policyReportDetails.warningTable.enabled | bool | `true` |  |
| policyReportDetails.warningTable.height | int | `4` |  |
| policyReportDetails.errorTable.enabled | bool | `true` |  |
| policyReportDetails.errorTable.height | int | `4` |  |
| clusterPolicyReportDetails.statusRow.height | int | `6` |  |
| clusterPolicyReportDetails.statusTimeline.enabled | bool | `true` |  |
| clusterPolicyReportDetails.statusTimeline.height | int | `8` |  |
| clusterPolicyReportDetails.passTable.enabled | bool | `true` |  |
| clusterPolicyReportDetails.passTable.height | int | `8` |  |
| clusterPolicyReportDetails.failTable.enabled | bool | `true` |  |
| clusterPolicyReportDetails.failTable.height | int | `8` |  |
| clusterPolicyReportDetails.warningTable.enabled | bool | `true` |  |
| clusterPolicyReportDetails.warningTable.height | int | `4` |  |
| clusterPolicyReportDetails.errorTable.enabled | bool | `true` |  |
| clusterPolicyReportDetails.errorTable.height | int | `4` |  |
| policyReportOverview.failingSummaryRow.height | int | `8` |  |
| policyReportOverview.failingTimeline.height | int | `10` |  |
| policyReportOverview.failingPolicyRuleTable.height | int | `10` |  |
| policyReportOverview.failingClusterPolicyRuleTable.height | int | `10` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
# ui

![Version: 2.3.3](https://img.shields.io/badge/Version-2.3.3-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.3.3](https://img.shields.io/badge/AppVersion-1.3.3-informational?style=flat-square)

Policy Reporter UI

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install ui chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| enabled | bool | `false` |  |
| displayMode | string | `""` |  |
| log.size | int | `200` |  |
| plugins.kyverno | bool | `false` |  |
| image.registry | string | `"registry1.dso.mil"` |  |
| image.repository | string | `"ironbank/nirmata/policy-reporter/policy-reporter-ui"` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.tag | string | `"1.3.3"` |  |
| imagePullSecrets | list | `[]` |  |
| replicaCount | int | `1` |  |
| deploymentStrategy | object | `{}` |  |
| securityContext.runAsUser | int | `1234` |  |
| securityContext.runAsNonRoot | bool | `true` |  |
| securityContext.privileged | bool | `false` |  |
| securityContext.allowPrivilegeEscalation | bool | `false` |  |
| securityContext.readOnlyRootFilesystem | bool | `true` |  |
| securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| podAnnotations | object | `{}` |  |
| podLabels | object | `{}` |  |
| resources | object | `{}` |  |
| serviceAccount.create | bool | `false` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.name | string | `""` |  |
| service.enabled | bool | `true` |  |
| service.annotations | object | `{}` |  |
| service.labels | object | `{}` |  |
| service.type | string | `"ClusterIP"` |  |
| service.port | int | `8080` |  |
| ingress.enabled | bool | `false` |  |
| ingress.className | string | `""` |  |
| ingress.labels | object | `{}` |  |
| ingress.annotations | object | `{}` |  |
| ingress.hosts[0].host | string | `"chart-example.local"` |  |
| ingress.hosts[0].paths | list | `[]` |  |
| ingress.tls | list | `[]` |  |
| nodeSelector | object | `{}` |  |
| tolerations | list | `[]` |  |
| affinity | object | `{}` |  |
| networkPolicy.enabled | bool | `false` |  |
| networkPolicy.egress | list | `[]` |  |
| views.dashboard.policyReports | bool | `true` |  |
| views.dashboard.clusterPolicyReports | bool | `true` |  |
| views.logs | bool | `true` |  |
| views.policyReports | bool | `true` |  |
| views.clusterPolicyReports | bool | `true` |  |
| views.kyvernoPolicies | bool | `true` |  |
| views.kyvernoVerifyImages | bool | `true` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
