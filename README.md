<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# kyverno-reporter

![Version: 3.0.3-bb.2](https://img.shields.io/badge/Version-3.0.3--bb.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 3.0.3](https://img.shields.io/badge/AppVersion-3.0.3-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

Policy Reporter watches for PolicyReport Resources.
It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord

## Upstream References

- <https://kyverno.github.io/policy-reporter>
- <https://github.com/kyverno/policy-reporter>

## Upstream Release Notes

- [Find our upstream chart's CHANGELOG here](https://github.com/kyverno/policy-reporter/blob/main/CHANGELOG.md)
- [and our upstream application release notes here](https://github.com/kyverno/kyverno/releases)

## Learn More

- [Application Overview](docs/overview.md)
- [Other Documentation](docs/)

## Pre-Requisites

- Kubernetes Cluster deployed
- Kubernetes config installed in `~/.kube/config`
- Helm installed

Install Helm

<https://helm.sh/docs/intro/install/>

## Deployment

- Clone down the repository
- cd into directory

```bash
helm install kyverno-reporter chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| kyverno-reporter.nameOverride | string | `""` | Override the chart name used for all resources |
| kyverno-reporter.fullnameOverride | string | `"policy-reporter"` | Overwrite the fullname of all resources |
| kyverno-reporter.namespaceOverride | string | `""` | Overwrite the namespace of all resources |
| kyverno-reporter.plugin.trivy.enabled | bool | `false` |  |
| kyverno-reporter.plugin.trivy.serviceAccount.create | bool | `false` |  |
| kyverno-reporter.plugin.trivy.serviceAccount.automount | bool | `false` |  |
| kyverno-reporter.plugin.trivy.serviceAccount.annotations | object | `{}` |  |
| kyverno-reporter.plugin.kyverno.enabled | bool | `false` |  |
| kyverno-reporter.plugin.kyverno.serviceAccount.create | bool | `false` |  |
| kyverno-reporter.plugin.kyverno.serviceAccount.automount | bool | `false` |  |
| kyverno-reporter.plugin.kyverno.serviceAccount.annotations | object | `{}` |  |
| kyverno-reporter.monitoring.enabled | bool | `false` |  |
| kyverno-reporter.monitoring.serviceMonitor.enabled | bool | `false` |  |
| kyverno-reporter.monitoring.serviceMonitor.namespace | string | `""` |  |
| kyverno-reporter.monitoring.serviceMonitor.scheme | string | `"https"` |  |
| kyverno-reporter.monitoring.serviceMonitor.tlsConfig | object | `{}` |  |
| kyverno-reporter.monitoring.serviceMonitor.honorLabels | bool | `false` |  |
| kyverno-reporter.monitoring.serviceMonitor.scrapeTimeout | string | `""` |  |
| kyverno-reporter.monitoring.serviceMonitor.interval | string | `""` |  |
| kyverno-reporter.monitoring.serviceMonitor.labels | object | `{}` |  |
| kyverno-reporter.monitoring.serviceMonitor.namespaceSelector | object | `{}` |  |
| kyverno-reporter.monitoring.serviceMonitor.relabelings | list | `[]` |  |
| kyverno-reporter.monitoring.serviceMonitor.metricRelabelings | list | `[]` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.enabled | bool | `false` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.namespace | string | `""` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.scheme | string | `"https"` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.tlsConfig | object | `{}` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.honorLabels | bool | `false` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.scrapeTimeout | string | `""` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.interval | string | `""` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.labels | object | `{}` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.namespaceSelector | object | `{}` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.relabelings | list | `[]` |  |
| kyverno-reporter.monitoring.kyverno.serviceMonitor.metricRelabelings | list | `[]` |  |
| kyverno-reporter.ui.enabled | bool | `true` |  |
| kyverno-reporter.image.registry | string | `"registry1.dso.mil"` |  |
| kyverno-reporter.image.repository | string | `"ironbank/opensource/kyverno/policy-reporter"` |  |
| kyverno-reporter.image.pullPolicy | string | `"IfNotPresent"` |  |
| kyverno-reporter.image.tag | string | `"3.0.3"` | Image tag |
| kyverno-reporter.imagePullSecrets | list | `[]` | Image pullSecrets |
| kyverno-reporter.priorityClassName | string | `""` | Deployment priorityClassName |
| kyverno-reporter.replicaCount | int | `1` | Deployment replica count |
| kyverno-reporter.revisionHistoryLimit | int | `10` | The number of revisions to keep |
| kyverno-reporter.updateStrategy | object | `{}` | Deployment strategy |
| kyverno-reporter.port | object | `{"name":"http","number":8080}` | Container port |
| kyverno-reporter.annotations | object | `{}` | Key/value pairs that are attached to all resources. |
| kyverno-reporter.rbac.enabled | bool | `true` | Create RBAC resources |
| kyverno-reporter.serviceAccount.create | bool | `true` | Create ServiceAccount |
| kyverno-reporter.serviceAccount.automount | bool | `true` | Enable ServiceAccount automount |
| kyverno-reporter.serviceAccount.annotations | object | `{}` | Annotations for the ServiceAccount |
| kyverno-reporter.serviceAccount.name | string | `""` | The ServiceAccount name |
| kyverno-reporter.serviceAccount.automountServiceAccountToken | bool | `false` |  |
| kyverno-reporter.service.enabled | bool | `true` | Create Service |
| kyverno-reporter.service.type | string | `"ClusterIP"` | Service type |
| kyverno-reporter.service.port | int | `8080` | Service port |
| kyverno-reporter.service.annotations | object | `{}` | Service annotations |
| kyverno-reporter.service.labels | object | `{}` | Service labels |
| kyverno-reporter.podSecurityContext | object | `{"fsGroup":1234}` | Security context for the pod |
| kyverno-reporter.securityContext.runAsUser | int | `1234` |  |
| kyverno-reporter.securityContext.runAsGroup | int | `1234` |  |
| kyverno-reporter.securityContext.runAsNonRoot | bool | `true` |  |
| kyverno-reporter.securityContext.privileged | bool | `false` |  |
| kyverno-reporter.securityContext.allowPrivilegeEscalation | bool | `false` |  |
| kyverno-reporter.securityContext.readOnlyRootFilesystem | bool | `true` |  |
| kyverno-reporter.securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| kyverno-reporter.securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| kyverno-reporter.podAnnotations | object | `{}` | Additional annotations to add to each pod |
| kyverno-reporter.podLabels | object | `{}` | Additional labels to add to each pod |
| kyverno-reporter.resources | object | `{}` | Resource constraints |
| kyverno-reporter.networkPolicy.enabled | bool | `false` | Create NetworkPolicy |
| kyverno-reporter.networkPolicy.egress | list | `[{"ports":[{"port":6443,"protocol":"TCP"}],"to":null}]` | Egress rule to allowe Kubernetes API Server access |
| kyverno-reporter.networkPolicy.ingress | list | `[]` |  |
| kyverno-reporter.ingress.enabled | bool | `false` | Create Ingress This ingress exposes the policy-reporter core app. |
| kyverno-reporter.ingress.className | string | `""` | Ingress className |
| kyverno-reporter.ingress.labels | object | `{}` | Labels for the Ingress |
| kyverno-reporter.ingress.annotations | object | `{}` | Annotations for the Ingress |
| kyverno-reporter.ingress.hosts | string | `nil` | Ingress host list |
| kyverno-reporter.ingress.tls | list | `[]` | Ingress tls list |
| kyverno-reporter.logging.server | bool | `false` | Enables server access logging |
| kyverno-reporter.logging.encoding | string | `"console"` | Log encoding possible encodings are console and json |
| kyverno-reporter.logging.logLevel | int | `0` | Log level default info |
| kyverno-reporter.rest.enabled | bool | `false` | Enables the REST API |
| kyverno-reporter.metrics.enabled | bool | `false` | Enables Prometheus Metrics |
| kyverno-reporter.metrics.mode | string | `"detailed"` | Metric Mode allowes to customize labels Allowed values: detailed, simple, custom |
| kyverno-reporter.metrics.customLabels | list | `[]` | List of used labels in custom mode Supported fields are: ["namespace", "rule", "policy", "report" // PolicyReport name, "kind" // resource kind, "name" // resource name, "status", "severity", "category", "source"] |
| kyverno-reporter.metrics.filter | object | `{}` | Filter results to reduce cardinality |
| kyverno-reporter.profiling.enabled | bool | `false` | Enable profiling with pprof |
| kyverno-reporter.worker | int | `5` | Amount of queue workers for PolicyReport resource processing |
| kyverno-reporter.reportFilter | object | `{}` | Filter PolicyReport resources to process |
| kyverno-reporter.sourceConfig | list | `[]` | Customize source specific logic like result ID generation |
| kyverno-reporter.sourceFilters[0].selector.source | string | `"kyverno"` | select PolicyReport by source |
| kyverno-reporter.sourceFilters[0].uncontrolledOnly | bool | `true` | Filter out PolicyReports of controlled Pods and Jobs, only works for PolicyReport with scope resource |
| kyverno-reporter.sourceFilters[0].disableClusterReports | bool | `false` | Filter out ClusterPolicyReports |
| kyverno-reporter.sourceFilters[0].kinds | object | `{"exclude":["ReplicaSet"]}` | Filter out PolicyReports based on the scope resource kind |
| kyverno-reporter.global.labels | object | `{}` | additional labels added on each resource |
| kyverno-reporter.basicAuth.username | string | `""` | HTTP BasicAuth username |
| kyverno-reporter.basicAuth.password | string | `""` | HTTP BasicAuth password |
| kyverno-reporter.basicAuth.secretRef | optional | `""` | Secret reference to get username and/or password from |
| kyverno-reporter.emailReports.clusterName | optional | `""` | - Displayed in the email report if configured |
| kyverno-reporter.emailReports.titlePrefix | string | `"Report"` | Title prefix in the email subject |
| kyverno-reporter.emailReports.resources | object | `{}` | Resource constraints for the created CronJobs |
| kyverno-reporter.emailReports.smtp.secret | optional | `""` | Secret reference to provide the complete or partial SMTP configuration |
| kyverno-reporter.emailReports.smtp.host | string | `""` | SMTP Server Host |
| kyverno-reporter.emailReports.smtp.port | int | `465` | SMTP Server Port |
| kyverno-reporter.emailReports.smtp.username | string | `""` | SMTP Username |
| kyverno-reporter.emailReports.smtp.password | string | `""` | SMTP Password |
| kyverno-reporter.emailReports.smtp.from | string | `""` | Displayed from email address |
| kyverno-reporter.emailReports.smtp.encryption | string | `""` | SMTP Encryption Default is none, supports ssl/tls and starttls |
| kyverno-reporter.emailReports.smtp.skipTLS | bool | `false` | Skip SMTP TLS verification |
| kyverno-reporter.emailReports.smtp.certificate | string | `""` | SMTP Server Certificate file path |
| kyverno-reporter.emailReports.summary.enabled | bool | `false` | Enable Summary E-Mail reports |
| kyverno-reporter.emailReports.summary.schedule | string | `"0 8 * * *"` | CronJob schedule |
| kyverno-reporter.emailReports.summary.activeDeadlineSeconds | int | `300` | CronJob activeDeadlineSeconds |
| kyverno-reporter.emailReports.summary.backoffLimit | int | `3` | CronJob backoffLimit |
| kyverno-reporter.emailReports.summary.ttlSecondsAfterFinished | int | `0` | CronJob ttlSecondsAfterFinished |
| kyverno-reporter.emailReports.summary.restartPolicy | string | `"Never"` | CronJob restartPolicy |
| kyverno-reporter.emailReports.summary.to | list | `[]` | List of receiver email addresses |
| kyverno-reporter.emailReports.summary.filter | optional | `{}` | Report filter |
| kyverno-reporter.emailReports.summary.channels | optional | `[]` | Channels can be used to to send only a subset of namespaces / sources to dedicated email addresses |
| kyverno-reporter.emailReports.violations.enabled | bool | `false` | Enable Violation Summary E-Mail reports |
| kyverno-reporter.emailReports.violations.schedule | string | `"0 8 * * *"` | CronJob schedule |
| kyverno-reporter.emailReports.violations.activeDeadlineSeconds | int | `300` | CronJob activeDeadlineSeconds |
| kyverno-reporter.emailReports.violations.backoffLimit | int | `3` | CronJob backoffLimit |
| kyverno-reporter.emailReports.violations.ttlSecondsAfterFinished | int | `0` | CronJob ttlSecondsAfterFinished |
| kyverno-reporter.emailReports.violations.restartPolicy | string | `"Never"` | CronJob restartPolicy |
| kyverno-reporter.emailReports.violations.to | list | `[]` | List of receiver email addresses |
| kyverno-reporter.emailReports.violations.filter | optional | `{}` | Report filter |
| kyverno-reporter.emailReports.violations.channels | optional | `[]` | Channels can be used to to send only a subset of namespaces / sources to dedicated email addresses |
| kyverno-reporter.existingTargetConfig.enabled | bool | `false` | Use an already existing configuration |
| kyverno-reporter.existingTargetConfig.name | string | `""` | Name of the secret with the config |
| kyverno-reporter.existingTargetConfig.subPath | string | `""` | SubPath within the secret (defaults to config.yaml) |
| kyverno-reporter.target.loki.host | string | `""` | Host Address |
| kyverno-reporter.target.loki.path | string | `""` | Loki API, defaults to "/loki/api/v1/push" |
| kyverno-reporter.target.loki.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.loki.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.loki.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.loki.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.loki.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.loki.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.loki.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.loki.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.loki.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.loki.username | string | `""` | HTTP BasicAuth username |
| kyverno-reporter.target.loki.password | string | `""` | HTTP BasicAuth password |
| kyverno-reporter.target.loki.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.loki.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.elasticsearch.host | string | `""` | Host address |
| kyverno-reporter.target.elasticsearch.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.elasticsearch.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.elasticsearch.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.elasticsearch.index | string | `"policy-reporter"` | Elasticsearch index (default: policy-reporter) |
| kyverno-reporter.target.elasticsearch.rotation | string | `"daily"` | Elasticsearch index rotation and index suffix Possible values: daily, monthly, annually, none (default: daily) |
| kyverno-reporter.target.elasticsearch.typelessApi | bool | `false` | Enables Elasticsearch typless API <https://www.elastic.co/blog/moving-from-types-to-typeless-apis-in-elasticsearch-7-0> keeping as false for retrocompatibility. |
| kyverno-reporter.target.elasticsearch.username | string | `""` | HTTP BasicAuth username |
| kyverno-reporter.target.elasticsearch.password | string | `""` | HTTP BasicAuth password |
| kyverno-reporter.target.elasticsearch.apiKey | string | `""` | Elasticsearch API Key for api key authentication |
| kyverno-reporter.target.elasticsearch.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.elasticsearch.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.elasticsearch.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.elasticsearch.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.elasticsearch.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.elasticsearch.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.elasticsearch.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.elasticsearch.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.slack.webhook | string | `""` | Webhook Address |
| kyverno-reporter.target.slack.channel | string | `""` | Slack Channel |
| kyverno-reporter.target.slack.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.slack.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.slack.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.slack.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.slack.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.slack.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.slack.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.slack.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.discord.webhook | string | `""` | Webhook Address |
| kyverno-reporter.target.discord.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.discord.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.discord.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.discord.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.discord.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.discord.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.discord.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.discord.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.discord.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.discord.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.discord.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.teams.webhook | string | `""` | Webhook Address |
| kyverno-reporter.target.teams.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.teams.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.teams.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.teams.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.teams.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.teams.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.teams.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.teams.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.teams.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.teams.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.teams.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.webhook.webhook | string | `""` | Webhook Address |
| kyverno-reporter.target.webhook.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.webhook.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.webhook.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.webhook.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.webhook.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.webhook.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.webhook.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.webhook.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.webhook.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.webhook.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.webhook.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.telegram.token | string | `""` | Telegram bot token |
| kyverno-reporter.target.telegram.chatId | string | `""` | Telegram chat id |
| kyverno-reporter.target.telegram.host | optional | `""` | Telegram proxy host |
| kyverno-reporter.target.telegram.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.telegram.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.telegram.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.telegram.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.telegram.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.telegram.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.telegram.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.telegram.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.telegram.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.telegram.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.telegram.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.googleChat.webhook | string | `""` | Webhook Address |
| kyverno-reporter.target.googleChat.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| kyverno-reporter.target.googleChat.skipTLS | bool | `false` | Skip TLS verification |
| kyverno-reporter.target.googleChat.headers | object | `{}` | Additional HTTP Headers |
| kyverno-reporter.target.googleChat.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.googleChat.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.googleChat.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.googleChat.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.googleChat.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.googleChat.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.googleChat.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.googleChat.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.s3.accessKeyId | optional | `""` | S3 Access key |
| kyverno-reporter.target.s3.secretAccessKey | optional | `""` | S3 SecretAccess key |
| kyverno-reporter.target.s3.region | optional | `""` | S3 Storage region |
| kyverno-reporter.target.s3.endpoint | optional | `""` | S3 Storage endpoint |
| kyverno-reporter.target.s3.bucket | required | `""` | S3 Storage bucket name |
| kyverno-reporter.target.s3.bucketKeyEnabled | bool | `false` | S3 Storage to use an S3 Bucket Key for object encryption with SSE-KMS |
| kyverno-reporter.target.s3.kmsKeyId | string | `""` | S3 Storage KMS Key ID for object encryption with SSE-KMS |
| kyverno-reporter.target.s3.serverSideEncryption | string | `""` | S3 Storage server-side encryption algorithm used when storing this object in Amazon S3, AES256, aws:kms |
| kyverno-reporter.target.s3.pathStyle | bool | `false` | S3 Storage, force path style configuration |
| kyverno-reporter.target.s3.prefix | string | `""` | Used prefix, keys will have format: s3://$bucket/$prefix/YYYY-MM-DD/YYYY-MM-DDTHH:mm:ss.s+01:00.json |
| kyverno-reporter.target.s3.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.s3.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.s3.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.s3.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.s3.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.s3.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.s3.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.s3.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.kinesis.accessKeyId | optional | `""` | Access key |
| kyverno-reporter.target.kinesis.secretAccessKey | optional | `""` | SecretAccess key |
| kyverno-reporter.target.kinesis.region | optional | `""` | Region |
| kyverno-reporter.target.kinesis.endpoint | optional | `""` | Endpoint |
| kyverno-reporter.target.kinesis.streamName | required | `""` | StreamName |
| kyverno-reporter.target.kinesis.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.kinesis.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.kinesis.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.kinesis.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.kinesis.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.kinesis.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.kinesis.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.kinesis.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.securityHub.accessKeyId | optional | `""` | Access key |
| kyverno-reporter.target.securityHub.secretAccessKey | optional | `""` | SecretAccess key |
| kyverno-reporter.target.securityHub.region | optional | `""` | Region |
| kyverno-reporter.target.securityHub.endpoint | optional | `""` | Endpoint |
| kyverno-reporter.target.securityHub.accountId | required | `""` | AccountId |
| kyverno-reporter.target.securityHub.productName | optional | `""` | Used product name, defaults to "Polilcy Reporter" |
| kyverno-reporter.target.securityHub.companyName | optional | `""` | Used company name, defaults to "Kyverno" |
| kyverno-reporter.target.securityHub.synchronize | bool | `true` | Enable cleanup listener for SecurityHub |
| kyverno-reporter.target.securityHub.delayInSeconds | int | `2` | Delay between AWS GetFindings API calls, to avoid hitting the API RequestLimit |
| kyverno-reporter.target.securityHub.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.securityHub.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.securityHub.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.securityHub.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.securityHub.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.securityHub.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.securityHub.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.securityHub.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.target.gcs.credentials | optional | `""` | GCS (Google Cloud Storage) Service Accout Credentials |
| kyverno-reporter.target.gcs.bucket | required | `""` | GCS Bucket |
| kyverno-reporter.target.gcs.secretRef | string | `""` | Read configuration from an already existing Secret |
| kyverno-reporter.target.gcs.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| kyverno-reporter.target.gcs.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| kyverno-reporter.target.gcs.sources | list | `[]` | List of sources which should send |
| kyverno-reporter.target.gcs.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| kyverno-reporter.target.gcs.customFields | object | `{}` | Added as additional labels |
| kyverno-reporter.target.gcs.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| kyverno-reporter.target.gcs.channels | list | `[]` | List of channels to route results to different configurations |
| kyverno-reporter.leaderElection.releaseOnCancel | bool | `true` |  |
| kyverno-reporter.leaderElection.leaseDuration | int | `15` |  |
| kyverno-reporter.leaderElection.renewDeadline | int | `10` |  |
| kyverno-reporter.leaderElection.retryPeriod | int | `2` |  |
| kyverno-reporter.redis.enabled | bool | `false` | Enables Redis as external result cache, uses in memory cache by default |
| kyverno-reporter.redis.address | string | `""` | Redis host |
| kyverno-reporter.redis.database | int | `0` | Redis database |
| kyverno-reporter.redis.prefix | string | `"policy-reporter"` | Redis key prefix |
| kyverno-reporter.redis.username | optional | `""` | Username |
| kyverno-reporter.redis.password | optional | `""` | Password |
| kyverno-reporter.database.type | string | `""` | Use an external Database, supported: mysql, postgres, mariadb |
| kyverno-reporter.database.database | string | `""` | Database |
| kyverno-reporter.database.username | string | `""` | Username |
| kyverno-reporter.database.password | string | `""` | Password |
| kyverno-reporter.database.host | string | `""` | Host Address |
| kyverno-reporter.database.enableSSL | bool | `false` | Enables SSL |
| kyverno-reporter.database.dsn | string | `""` | Instead of configure the individual values you can also provide an DSN string example postgres: postgres://postgres:password@localhost:5432/postgres?sslmode=disable example mysql: root:password@tcp(localhost:3306)/test?tls=false |
| kyverno-reporter.database.secretRef | string | `""` | Read configuration from an existing Secret supported fields: username, password, host, dsn, database |
| kyverno-reporter.database.mountedSecret | string | `""` |  |
| kyverno-reporter.podDisruptionBudget.minAvailable | int | `1` | Configures the minimum available pods for policy-reporter disruptions. Cannot be used if `maxUnavailable` is set. |
| kyverno-reporter.podDisruptionBudget.maxUnavailable | string | `nil` | Configures the maximum unavailable pods for policy-reporter disruptions. Cannot be used if `minAvailable` is set. |
| kyverno-reporter.nodeSelector | object | `{}` | Node labels for pod assignment ref: <https://kubernetes.io/docs/user-guide/node-selection/> |
| kyverno-reporter.tolerations | list | `[]` | Tolerations for pod assignment ref: <https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/> |
| kyverno-reporter.affinity | object | `{}` | Anti-affinity to disallow deploying client and master nodes on the same worker node |
| kyverno-reporter.topologySpreadConstraints | list | `[]` | Topology Spread Constraints to better spread pods |
| kyverno-reporter.livenessProbe | object | `{"httpGet":{"path":"/ready","port":"http"}}` | Deployment livenessProbe for policy-reporter |
| kyverno-reporter.readinessProbe | object | `{"httpGet":{"path":"/healthz","port":"http"}}` | Deployment readinessProbe for policy-reporter |
| kyverno-reporter.sqliteVolume | object | `{}` |  |
| kyverno-reporter.envVars | list | `[]` | Allow additional env variables to be added |
| kyverno-reporter.tmpVolume | object | `{}` | Allow custom configuration of the /tmp volume |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| networkPolicies.additionalPolicies | list | `[]` |  |
| extraVolumes.volumeMounts | list | `[]` |  |
| openshift | bool | `false` |  |
| istio.enabled | bool | `false` |  |
| istio.mtls.mode | string | `"STRICT"` |  |
| istio.hardened.enabled | bool | `false` |  |
| istio.hardened.outboundTrafficPolicyMode | string | `"REGISTRY_ONLY"` |  |
| istio.hardened.customServiceEntries | list | `[]` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_grafana_url | string | `"http://grafana.monitoring.svc.cluster.local"` |  |
| bbtests.cypress.envs.cypress_prometheus_url | string | `"http://monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090"` |  |
| bbtests.cypress.envs.cypress_grafana_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_grafana_pass | string | `"prom-operator"` |  |
| bbtests.cypress.envs.cypress_reporter_ns | string | `"kyverno-reporter"` |  |
| bbtests.scripts.image | string | `"registry1.dso.mil/ironbank/opensource/kubernetes/kubectl:v1.30.11"` |  |
| bbtests.scripts.envs.KYVERNO_REPORTER_URL | string | `"http://policy-reporter.kyverno-reporter.svc:8080"` |  |
| bbtests.volumes | list | `[]` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._
