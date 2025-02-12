<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# kyverno-reporter

![Version: 3.0.1-bb.1](https://img.shields.io/badge/Version-3.0.1--bb.1-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 3.0.0](https://img.shields.io/badge/AppVersion-3.0.0-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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

https://helm.sh/docs/intro/install/

## Deployment

- Clone down the repository
- cd into directory

```bash
helm install kyverno-reporter chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| nameOverride | string | `""` | Override the chart name used for all resources |
| fullnameOverride | string | `"policy-reporter"` | Overwrite the fullname of all resources |
| namespaceOverride | string | `""` | Overwrite the namespace of all resources |
| plugin.trivy.enabled | bool | `false` |  |
| plugin.trivy.serviceAccount.create | bool | `false` |  |
| plugin.trivy.serviceAccount.automount | bool | `false` |  |
| plugin.trivy.serviceAccount.annotations | object | `{}` |  |
| plugin.kyverno.enabled | bool | `false` |  |
| plugin.kyverno.serviceAccount.create | bool | `false` |  |
| plugin.kyverno.serviceAccount.automount | bool | `false` |  |
| plugin.kyverno.serviceAccount.annotations | object | `{}` |  |
| monitoring.serviceMonitor.enabled | bool | `false` |  |
| monitoring.serviceMonitor.namespace | string | `""` |  |
| monitoring.serviceMonitor.scheme | string | `"http"` |  |
| monitoring.serviceMonitor.tlsConfig | object | `{}` |  |
| monitoring.serviceMonitor.honorLabels | bool | `false` |  |
| monitoring.serviceMonitor.scrapeTimeout | string | `""` |  |
| monitoring.serviceMonitor.interval | string | `""` |  |
| monitoring.serviceMonitor.labels | object | `{}` |  |
| monitoring.serviceMonitor.namespaceSelector | object | `{}` |  |
| monitoring.serviceMonitor.relabelings | list | `[]` |  |
| monitoring.serviceMonitor.metricRelabelings | list | `[]` |  |
| ui.enabled | bool | `false` |  |
| image.registry | string | `"registry1.dso.mil"` |  |
| image.repository | string | `"ironbank/opensource/kyverno/policy-reporter"` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.tag | string | `"3.0.0"` | Image tag |
| imagePullSecrets | list | `[]` | Image pullSecrets |
| priorityClassName | string | `""` | Deployment priorityClassName |
| replicaCount | int | `1` | Deployment replica count |
| revisionHistoryLimit | int | `10` | The number of revisions to keep |
| updateStrategy | object | `{}` | Deployment strategy |
| port | object | `{"name":"http","number":8080}` | Container port |
| annotations | object | `{}` | Key/value pairs that are attached to all resources. |
| rbac.enabled | bool | `true` | Create RBAC resources |
| serviceAccount.create | bool | `true` | Create ServiceAccount |
| serviceAccount.automount | bool | `true` | Enable ServiceAccount automount |
| serviceAccount.annotations | object | `{}` | Annotations for the ServiceAccount |
| serviceAccount.name | string | `""` | The ServiceAccount name |
| serviceAccount.automountServiceAccountToken | bool | `false` |  |
| service.enabled | bool | `true` | Create Service |
| service.type | string | `"ClusterIP"` | Service type |
| service.port | int | `8080` | Service port |
| service.annotations | object | `{}` | Service annotations |
| service.labels | object | `{}` | Service labels |
| podSecurityContext | object | `{"fsGroup":1234}` | Security context for the pod |
| securityContext.runAsUser | int | `1234` |  |
| securityContext.runAsGroup | int | `1234` |  |
| securityContext.runAsNonRoot | bool | `true` |  |
| securityContext.privileged | bool | `false` |  |
| securityContext.allowPrivilegeEscalation | bool | `false` |  |
| securityContext.readOnlyRootFilesystem | bool | `true` |  |
| securityContext.capabilities.drop[0] | string | `"ALL"` |  |
| securityContext.seccompProfile.type | string | `"RuntimeDefault"` |  |
| podAnnotations | object | `{}` | Additional annotations to add to each pod |
| podLabels | object | `{}` | Additional labels to add to each pod |
| resources | object | `{}` | Resource constraints |
| networkPolicy.enabled | bool | `false` | Create NetworkPolicy |
| networkPolicy.egress | list | `[{"ports":[{"port":6443,"protocol":"TCP"}],"to":null}]` | Egress rule to allowe Kubernetes API Server access |
| networkPolicy.ingress | list | `[]` |  |
| ingress.enabled | bool | `false` | Create Ingress This ingress exposes the policy-reporter core app. |
| ingress.className | string | `""` | Ingress className |
| ingress.labels | object | `{}` | Labels for the Ingress |
| ingress.annotations | object | `{}` | Annotations for the Ingress |
| ingress.hosts | string | `nil` | Ingress host list |
| ingress.tls | list | `[]` | Ingress tls list |
| logging.server | bool | `false` | Enables server access logging |
| logging.encoding | string | `"console"` | Log encoding possible encodings are console and json |
| logging.logLevel | int | `0` | Log level default info |
| rest.enabled | bool | `false` | Enables the REST API |
| metrics.enabled | bool | `false` | Enables Prometheus Metrics |
| metrics.mode | string | `"detailed"` | Metric Mode allowes to customize labels Allowed values: detailed, simple, custom |
| metrics.customLabels | list | `[]` | List of used labels in custom mode Supported fields are: ["namespace", "rule", "policy", "report" // PolicyReport name, "kind" // resource kind, "name" // resource name, "status", "severity", "category", "source"] |
| metrics.filter | object | `{}` | Filter results to reduce cardinality |
| profiling.enabled | bool | `false` | Enable profiling with pprof |
| worker | int | `5` | Amount of queue workers for PolicyReport resource processing |
| reportFilter | object | `{}` | Filter PolicyReport resources to process |
| sourceConfig | list | `[]` | Customize source specific logic like result ID generation |
| sourceFilters[0].selector.source | string | `"kyverno"` | select PolicyReport by source |
| sourceFilters[0].uncontrolledOnly | bool | `true` | Filter out PolicyReports of controlled Pods and Jobs, only works for PolicyReport with scope resource |
| sourceFilters[0].disableClusterReports | bool | `false` | Filter out ClusterPolicyReports |
| sourceFilters[0].kinds | object | `{"exclude":["ReplicaSet"]}` | Filter out PolicyReports based on the scope resource kind |
| global.labels | object | `{}` | additional labels added on each resource |
| basicAuth.username | string | `""` | HTTP BasicAuth username |
| basicAuth.password | string | `""` | HTTP BasicAuth password |
| basicAuth.secretRef | optional | `""` | Secret reference to get username and/or password from |
| emailReports.clusterName | optional | `""` | - Displayed in the email report if configured |
| emailReports.titlePrefix | string | `"Report"` | Title prefix in the email subject |
| emailReports.resources | object | `{}` | Resource constraints for the created CronJobs |
| emailReports.smtp.secret | optional | `""` | Secret reference to provide the complete or partial SMTP configuration |
| emailReports.smtp.host | string | `""` | SMTP Server Host |
| emailReports.smtp.port | int | `465` | SMTP Server Port |
| emailReports.smtp.username | string | `""` | SMTP Username |
| emailReports.smtp.password | string | `""` | SMTP Password |
| emailReports.smtp.from | string | `""` | Displayed from email address |
| emailReports.smtp.encryption | string | `""` | SMTP Encryption Default is none, supports ssl/tls and starttls |
| emailReports.smtp.skipTLS | bool | `false` | Skip SMTP TLS verification |
| emailReports.smtp.certificate | string | `""` | SMTP Server Certificate file path |
| emailReports.summary.enabled | bool | `false` | Enable Summary E-Mail reports |
| emailReports.summary.schedule | string | `"0 8 * * *"` | CronJob schedule |
| emailReports.summary.activeDeadlineSeconds | int | `300` | CronJob activeDeadlineSeconds |
| emailReports.summary.backoffLimit | int | `3` | CronJob backoffLimit |
| emailReports.summary.ttlSecondsAfterFinished | int | `0` | CronJob ttlSecondsAfterFinished |
| emailReports.summary.restartPolicy | string | `"Never"` | CronJob restartPolicy |
| emailReports.summary.to | list | `[]` | List of receiver email addresses |
| emailReports.summary.filter | optional | `{}` | Report filter |
| emailReports.summary.channels | optional | `[]` | Channels can be used to to send only a subset of namespaces / sources to dedicated email addresses |
| emailReports.violations.enabled | bool | `false` | Enable Violation Summary E-Mail reports |
| emailReports.violations.schedule | string | `"0 8 * * *"` | CronJob schedule |
| emailReports.violations.activeDeadlineSeconds | int | `300` | CronJob activeDeadlineSeconds |
| emailReports.violations.backoffLimit | int | `3` | CronJob backoffLimit |
| emailReports.violations.ttlSecondsAfterFinished | int | `0` | CronJob ttlSecondsAfterFinished |
| emailReports.violations.restartPolicy | string | `"Never"` | CronJob restartPolicy |
| emailReports.violations.to | list | `[]` | List of receiver email addresses |
| emailReports.violations.filter | optional | `{}` | Report filter |
| emailReports.violations.channels | optional | `[]` | Channels can be used to to send only a subset of namespaces / sources to dedicated email addresses |
| existingTargetConfig.enabled | bool | `false` | Use an already existing configuration |
| existingTargetConfig.name | string | `""` | Name of the secret with the config |
| existingTargetConfig.subPath | string | `""` | SubPath within the secret (defaults to config.yaml) |
| target.loki.host | string | `""` | Host Address |
| target.loki.path | string | `""` | Loki API, defaults to "/loki/api/v1/push" |
| target.loki.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.loki.skipTLS | bool | `false` | Skip TLS verification |
| target.loki.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.loki.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.loki.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.loki.sources | list | `[]` | List of sources which should send |
| target.loki.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.loki.customFields | object | `{}` | Added as additional labels |
| target.loki.headers | object | `{}` | Additional HTTP Headers |
| target.loki.username | string | `""` | HTTP BasicAuth username |
| target.loki.password | string | `""` | HTTP BasicAuth password |
| target.loki.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.loki.channels | list | `[]` | List of channels to route results to different configurations |
| target.elasticsearch.host | string | `""` | Host address |
| target.elasticsearch.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.elasticsearch.skipTLS | bool | `false` | Skip TLS verification |
| target.elasticsearch.headers | object | `{}` | Additional HTTP Headers |
| target.elasticsearch.index | string | `"policy-reporter"` | Elasticsearch index (default: policy-reporter) |
| target.elasticsearch.rotation | string | `"daily"` | Elasticsearch index rotation and index suffix Possible values: daily, monthly, annually, none (default: daily) |
| target.elasticsearch.typelessApi | bool | `false` | Enables Elasticsearch typless API https://www.elastic.co/blog/moving-from-types-to-typeless-apis-in-elasticsearch-7-0 keeping as false for retrocompatibility. |
| target.elasticsearch.username | string | `""` | HTTP BasicAuth username |
| target.elasticsearch.password | string | `""` | HTTP BasicAuth password |
| target.elasticsearch.apiKey | string | `""` | Elasticsearch API Key for api key authentication |
| target.elasticsearch.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.elasticsearch.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.elasticsearch.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.elasticsearch.sources | list | `[]` | List of sources which should send |
| target.elasticsearch.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.elasticsearch.customFields | object | `{}` | Added as additional labels |
| target.elasticsearch.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.elasticsearch.channels | list | `[]` | List of channels to route results to different configurations |
| target.slack.webhook | string | `""` | Webhook Address |
| target.slack.channel | string | `""` | Slack Channel |
| target.slack.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.slack.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.slack.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.slack.sources | list | `[]` | List of sources which should send |
| target.slack.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.slack.customFields | object | `{}` | Added as additional labels |
| target.slack.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.slack.channels | list | `[]` | List of channels to route results to different configurations |
| target.discord.webhook | string | `""` | Webhook Address |
| target.discord.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.discord.skipTLS | bool | `false` | Skip TLS verification |
| target.discord.headers | object | `{}` | Additional HTTP Headers |
| target.discord.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.discord.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.discord.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.discord.sources | list | `[]` | List of sources which should send |
| target.discord.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.discord.customFields | object | `{}` | Added as additional labels |
| target.discord.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.discord.channels | list | `[]` | List of channels to route results to different configurations |
| target.teams.webhook | string | `""` | Webhook Address |
| target.teams.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.teams.skipTLS | bool | `false` | Skip TLS verification |
| target.teams.headers | object | `{}` | Additional HTTP Headers |
| target.teams.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.teams.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.teams.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.teams.sources | list | `[]` | List of sources which should send |
| target.teams.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.teams.customFields | object | `{}` | Added as additional labels |
| target.teams.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.teams.channels | list | `[]` | List of channels to route results to different configurations |
| target.webhook.webhook | string | `""` | Webhook Address |
| target.webhook.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.webhook.skipTLS | bool | `false` | Skip TLS verification |
| target.webhook.headers | object | `{}` | Additional HTTP Headers |
| target.webhook.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.webhook.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.webhook.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.webhook.sources | list | `[]` | List of sources which should send |
| target.webhook.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.webhook.customFields | object | `{}` | Added as additional labels |
| target.webhook.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.webhook.channels | list | `[]` | List of channels to route results to different configurations |
| target.telegram.token | string | `""` | Telegram bot token |
| target.telegram.chatId | string | `""` | Telegram chat id |
| target.telegram.host | optional | `""` | Telegram proxy host |
| target.telegram.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.telegram.skipTLS | bool | `false` | Skip TLS verification |
| target.telegram.headers | object | `{}` | Additional HTTP Headers |
| target.telegram.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.telegram.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.telegram.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.telegram.sources | list | `[]` | List of sources which should send |
| target.telegram.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.telegram.customFields | object | `{}` | Added as additional labels |
| target.telegram.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.telegram.channels | list | `[]` | List of channels to route results to different configurations |
| target.googleChat.webhook | string | `""` | Webhook Address |
| target.googleChat.certificate | string | `""` | Server Certificate file path Can be added under extraVolumes |
| target.googleChat.skipTLS | bool | `false` | Skip TLS verification |
| target.googleChat.headers | object | `{}` | Additional HTTP Headers |
| target.googleChat.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.googleChat.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.googleChat.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.googleChat.sources | list | `[]` | List of sources which should send |
| target.googleChat.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.googleChat.customFields | object | `{}` | Added as additional labels |
| target.googleChat.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.googleChat.channels | list | `[]` | List of channels to route results to different configurations |
| target.s3.accessKeyId | optional | `""` | S3 Access key |
| target.s3.secretAccessKey | optional | `""` | S3 SecretAccess key |
| target.s3.region | optional | `""` | S3 Storage region |
| target.s3.endpoint | optional | `""` | S3 Storage endpoint |
| target.s3.bucket | required | `""` | S3 Storage bucket name |
| target.s3.bucketKeyEnabled | bool | `false` | S3 Storage to use an S3 Bucket Key for object encryption with SSE-KMS |
| target.s3.kmsKeyId | string | `""` | S3 Storage KMS Key ID for object encryption with SSE-KMS |
| target.s3.serverSideEncryption | string | `""` | S3 Storage server-side encryption algorithm used when storing this object in Amazon S3, AES256, aws:kms |
| target.s3.pathStyle | bool | `false` | S3 Storage, force path style configuration |
| target.s3.prefix | string | `""` | Used prefix, keys will have format: `s3://<bucket>/<prefix>/YYYY-MM-DD/YYYY-MM-DDTHH:mm:ss.s+01:00.json` |
| target.s3.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.s3.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.s3.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.s3.sources | list | `[]` | List of sources which should send |
| target.s3.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.s3.customFields | object | `{}` | Added as additional labels |
| target.s3.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.s3.channels | list | `[]` | List of channels to route results to different configurations |
| target.kinesis.accessKeyId | optional | `""` | Access key |
| target.kinesis.secretAccessKey | optional | `""` | SecretAccess key |
| target.kinesis.region | optional | `""` | Region |
| target.kinesis.endpoint | optional | `""` | Endpoint |
| target.kinesis.streamName | required | `""` | StreamName |
| target.kinesis.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.kinesis.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.kinesis.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.kinesis.sources | list | `[]` | List of sources which should send |
| target.kinesis.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.kinesis.customFields | object | `{}` | Added as additional labels |
| target.kinesis.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.kinesis.channels | list | `[]` | List of channels to route results to different configurations |
| target.securityHub.accessKeyId | optional | `""` | Access key |
| target.securityHub.secretAccessKey | optional | `""` | SecretAccess key |
| target.securityHub.region | optional | `""` | Region |
| target.securityHub.endpoint | optional | `""` | Endpoint |
| target.securityHub.accountId | required | `""` | AccountId |
| target.securityHub.productName | optional | `""` | Used product name, defaults to "Polilcy Reporter" |
| target.securityHub.companyName | optional | `""` | Used company name, defaults to "Kyverno" |
| target.securityHub.synchronize | bool | `true` | Enable cleanup listener for SecurityHub |
| target.securityHub.delayInSeconds | int | `2` | Delay between AWS GetFindings API calls, to avoid hitting the API RequestLimit |
| target.securityHub.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.securityHub.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.securityHub.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.securityHub.sources | list | `[]` | List of sources which should send |
| target.securityHub.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.securityHub.customFields | object | `{}` | Added as additional labels |
| target.securityHub.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.securityHub.channels | list | `[]` | List of channels to route results to different configurations |
| target.gcs.credentials | optional | `""` | GCS (Google Cloud Storage) Service Accout Credentials |
| target.gcs.bucket | required | `""` | GCS Bucket |
| target.gcs.secretRef | string | `""` | Read configuration from an already existing Secret |
| target.gcs.mountedSecret | string | `""` | Mounted secret path by Secrets Controller, secret should be in json format |
| target.gcs.minimumSeverity | string | `""` | Minimum severity: "" < info < low < medium < high < critical |
| target.gcs.sources | list | `[]` | List of sources which should send |
| target.gcs.skipExistingOnStartup | bool | `true` | Skip already existing PolicyReportResults on startup |
| target.gcs.customFields | object | `{}` | Added as additional labels |
| target.gcs.filter | object | `{}` | Filter Results which should send to this target Wildcars for namespaces and policies are supported, you can either define exclude or include values Filters are available for all targets except the UI |
| target.gcs.channels | list | `[]` | List of channels to route results to different configurations |
| leaderElection.releaseOnCancel | bool | `true` |  |
| leaderElection.leaseDuration | int | `15` |  |
| leaderElection.renewDeadline | int | `10` |  |
| leaderElection.retryPeriod | int | `2` |  |
| redis.enabled | bool | `false` | Enables Redis as external result cache, uses in memory cache by default |
| redis.address | string | `""` | Redis host |
| redis.database | int | `0` | Redis database |
| redis.prefix | string | `"policy-reporter"` | Redis key prefix |
| redis.username | optional | `""` | Username |
| redis.password | optional | `""` | Password |
| database.type | string | `""` | Use an external Database, supported: mysql, postgres, mariadb |
| database.database | string | `""` | Database |
| database.username | string | `""` | Username |
| database.password | string | `""` | Password |
| database.host | string | `""` | Host Address |
| database.enableSSL | bool | `false` | Enables SSL |
| database.dsn | string | `""` | Instead of configure the individual values you can also provide an DSN string example postgres: postgres://postgres:password@localhost:5432/postgres?sslmode=disable example mysql: root:password@tcp(localhost:3306)/test?tls=false |
| database.secretRef | string | `""` | Read configuration from an existing Secret supported fields: username, password, host, dsn, database |
| database.mountedSecret | string | `""` |  |
| podDisruptionBudget.minAvailable | int | `1` | Configures the minimum available pods for policy-reporter disruptions. Cannot be used if `maxUnavailable` is set. |
| podDisruptionBudget.maxUnavailable | string | `nil` | Configures the maximum unavailable pods for policy-reporter disruptions. Cannot be used if `minAvailable` is set. |
| nodeSelector | object | `{}` | Node labels for pod assignment ref: https://kubernetes.io/docs/user-guide/node-selection/ |
| tolerations | list | `[]` | Tolerations for pod assignment ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ |
| affinity | object | `{}` | Anti-affinity to disallow deploying client and master nodes on the same worker node |
| topologySpreadConstraints | list | `[]` | Topology Spread Constraints to better spread pods |
| livenessProbe | object | `{"httpGet":{"path":"/ready","port":"http"}}` | Deployment livenessProbe for policy-reporter |
| readinessProbe | object | `{"httpGet":{"path":"/healthz","port":"http"}}` | Deployment readinessProbe for policy-reporter |
| sqliteVolume | object | `{}` |  |
| envVars | list | `[]` | Allow additional env variables to be added |
| tmpVolume | object | `{}` | Allow custom configuration of the /tmp volume |
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
| bbtests.volumes | list | `[]` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._

