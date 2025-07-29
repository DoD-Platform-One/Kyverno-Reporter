<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# kyverno-reporter

![Version: 3.3.3-bb.0](https://img.shields.io/badge/Version-3.3.3--bb.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 3.3.1](https://img.shields.io/badge/AppVersion-3.3.1-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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
| domain | string | `"dev.bigbang.mil"` | domain to use for virtual service |
| global.fullnameOverride | string | `"kyverno-reporter"` |  |
| global.labels | object | `{}` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.ingressLabels.app | string | `"public-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.istioNamespaceSelector.ingress | string | `"istio-gateway"` |  |
| networkPolicies.istioNamespaceSelector.egress | string | `"istio-gateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| networkPolicies.additionalPolicies | list | `[]` |  |
| istio.enabled | bool | `true` |  |
| istio.mtls.mode | string | `"STRICT"` |  |
| istio.hardened.enabled | bool | `true` |  |
| istio.hardened.outboundTrafficPolicyMode | string | `"REGISTRY_ONLY"` |  |
| istio.hardened.customAuthorizationPolicies[0].name | string | `"allow-kyverno-reporter"` |  |
| istio.hardened.customAuthorizationPolicies[0].enabled | bool | `true` |  |
| istio.hardened.customAuthorizationPolicies[0].spec.selector.matchLabels."app.kubernetes.io/instance" | string | `"kyverno-reporter-kyverno-reporter"` |  |
| istio.hardened.customAuthorizationPolicies[0].spec.action | string | `"ALLOW"` |  |
| istio.hardened.customAuthorizationPolicies[0].spec.rules[0].from[0].source.namespaces[0] | string | `"kyverno-reporter"` |  |
| istio.kyvernoReporter.enabled | bool | `true` | Enable Virtual Service for Kyverno Reporter |
| istio.kyvernoReporter.labels | object | `{}` | Labels for VS |
| istio.kyvernoReporter.gateways | list | `["istio-gateway/public-ingressgateway"]` | Gateways for VS |
| istio.kyvernoReporter.hosts | list | `["policyreporter.{{ .Values.domain }}"]` | Hosts for VS |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_grafana_url | string | `"http://grafana.monitoring.svc.cluster.local"` |  |
| bbtests.cypress.envs.cypress_prometheus_url | string | `"http://monitoring-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090"` |  |
| bbtests.cypress.envs.cypress_grafana_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_grafana_pass | string | `"prom-operator"` |  |
| bbtests.cypress.envs.cypress_reporter_ns | string | `"kyverno-reporter"` |  |
| bbtests.scripts.image | string | `"registry1.dso.mil/ironbank/opensource/kubernetes/kubectl:v1.32.6"` |  |
| bbtests.scripts.envs.KYVERNO_REPORTER_URL | string | `"http://policy-reporter.kyverno-reporter.svc:8080"` |  |
| bbtests.volumes | list | `[]` |  |
| upstream.nameOverride | string | `"kyverno-reporter"` |  |
| upstream.namespaceOverride | string | `"kyverno-reporter"` |  |
| upstream.imagePullSecrets[0].name | string | `"private-registry"` |  |
| upstream.image.registry | string | `"registry1.dso.mil"` |  |
| upstream.image.repository | string | `"ironbank/opensource/kyverno/policy-reporter"` |  |
| upstream.image.pullPolicy | string | `"IfNotPresent"` |  |
| upstream.image.tag | string | `"3.3.3"` |  |
| upstream.image.priorityClassName | string | `""` |  |
| upstream.ui.enabled | bool | `true` |  |
| upstream.ui.image.registry | string | `"registry1.dso.mil"` |  |
| upstream.ui.image.repository | string | `"ironbank/nirmata/policy-reporter/policy-reporter-ui"` |  |
| upstream.ui.image.pullPolicy | string | `"IfNotPresent"` |  |
| upstream.ui.image.tag | string | `"2.4.1"` |  |
| upstream.ui.imagePullSecrets[0].name | string | `"private-registry"` |  |
| upstream.ui.podLabels."app.kubernetes.io/part-of" | string | `"policy-reporter"` |  |
| upstream.plugin.kyverno.enabled | bool | `true` |  |
| upstream.plugin.kyverno.image.registry | string | `"registry1.dso.mil"` |  |
| upstream.plugin.kyverno.image.repository | string | `"ironbank/opensource/kyverno/policy-reporter/kyverno-plugin"` |  |
| upstream.plugin.kyverno.image.pullPolicy | string | `"IfNotPresent"` |  |
| upstream.plugin.kyverno.image.tag | string | `"0.5.0"` |  |
| upstream.plugin.kyverno.imagePullSecrets[0].name | string | `"private-registry"` |  |
| upstream.plugin.kyverno.podLabels."app.kubernetes.io/part-of" | string | `"policy-reporter"` |  |
| upstream.monitoring.enabled | bool | `true` | Enables the Prometheus Operator integration |
| upstream.monitoring.grafana.dashboards.enabled | bool | `true` |  |
| upstream.monitoring.grafana.dashboards.namespace | string | `"monitoring"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._
