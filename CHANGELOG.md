# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

---

## [3.3.2-bb.0] (2025-07-30)

### Changed

- registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter v3.1.4 -> v3.3.3
- registry1.dso.mil/ironbank/nirmata/policy-reporter/policy-reporter-ui v2.3.10 -> v2.4.1
- registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter/kyverno-plugin v0.4.4 -> v0.5.0
- Updated policy-reporter subchart 3.1.4 -> 3.3.2
- Updated cypress v13.0.0 -> v14.0.0

## [3.1.4-bb.0] (2025-06-24)

### Changed

- registry1.dso.mil/ironbank/opensource/kubernetes/kubectl v1.32.5 -> v1.32.6
- Updated policy-reporter subchart 3.1.1 -> 3.1.4

## [3.1.1-bb.4] (2025-06-23)

### Changed

- Removed bigbang folder and unused files
- Reorganized values.yaml so bb values are on top according to updated ADR for pass-through
- Removed unused value references
- Removed upstream maintainer reference in chart.yaml

## [3.1.1-bb.3] (2025-06-20)

### Changed

- Updated DEVELOPMENT_MAINTENANCE.md for pass-through pattern
- Renabled cypress tests and ensured they are working

## [3.1.1-bb.2] (2025-06-13)

### Changed

- Fixing selectors for network policies
- Turning the virtual service on by default

## [3.1.1-bb.1] (2025-06-13)

### Changed

- fix Istio VirtualService and AuthzPol

## [3.1.1-bb.0] (2025-06-04)

### Changed

- gluon 0.5.14 -> 0.6.2
- registry1.dso.mil/ironbank/nirmata/policy-reporter/policy-reporter-ui 2.3.7 -> 2.3.10
- registry1.dso.mil/ironbank/opensource/kubernetes/kubectl v1.30.11 -> v1.32.5
- registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter 3.0.3 -> 3.1.1
- registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter/kyverno-plugin 0.4.2 -> 0.4.4

## [3.0.3-bb.3] - 2025-05-31

### Changed

- Added authorization policy for istio hardened

## [3.0.3-bb.2] - 2025-05-01

### Changed

- Refactored to pass-through pattern

## [3.0.3-bb.1] - 2025-03-28

### Changed

- Updated Kyverno Reporter Plugin subchart 1.5.2 -> 1.6.4

## [3.0.3-bb.0] - 2025-03-21

### Updated

- registry1.dso.mil/ironbank/opensource/kubernetes/kubectl v1.30.6 -> v1.30.11
- registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter 3.0.0 -> 3.0.3

## [3.0.1-bb.4] - 2025-03-19

### Updated

- Change Prometheus Service Entry Not Configured For Certs And TLS

## [3.0.1-bb.3] - 2025-02-20

### Updated

- Change cypress E2E tests for prometheus to CLI driven tests

## [3.0.1-bb.2] - 2025-02-18

### Updated

- Updated Big Bang NPs to use a common selector label to match all pods

## [3.0.1-bb.1] - 2025-02-11

### Updated

- Added support for istio Operatorless network policy values

## [3.0.1-bb.0] - 2025-02-10

### Changed

- Updated upstream chart reference from `2.24.2` ---> `3.0.1`
- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.2` ----> `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:3.0.0`
- Updated `gluon` package dependency version from `0.5.4` ---> `0.5.14`

## [2.24.2-bb.2] - 2025-01-09

### Changed

- Updated `gluon` package dependency version from `0.5.4` ---> `0.5.12`

## [2.24.2-bb.1] - 2024-10-04

### Changed

- Removed duplicate entry
- Added the maintenance track annotation and badge

## [2.24.2-bb.0] - 2024-10-02

### Changed

- Updated upstream chart reference from `2.24.1` ---> `2.24.2`
- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.1` ----> `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.2`
- Updated `gluon` package dependency version from `0.5.3` ---> `0.5.4`

## [2.24.1-bb.1] - 2024-08-26

### Changed

- Reverted previous Kiali label changes related to the epic and modified them to follow the new pattern.

## [2.24.1-bb.0] - 2024-08-19

### Changed

- Updated upstream chart reference from `2.24.0` to `2.24.1`

## [2.24.0-bb.3] - 2024-08-19

### Changed

- Updated `gluon` package dependency version from `0.5.2` to `0.5.3`
- Reduced number of Cypress test retries

## [2.24.0-bb.2] - 2024-08-05

### Changed

- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.0` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.1`
- Updated `gluon` package dependency version from `0.5.0` to `0.5.2`

## [2.24.0-bb.1] - 2024-07-26

### Changed

- Added `bigbang.labels` to `chart/templates/deployment.yaml`, `chart/templates/cronjob-summary-report.yaml` and `chart/templates/cronjob-violations-report.yaml` to conform to Kiali requirements
- Updated `docs/DEVELOPMENT_MAINTENANCE.md`

## [2.24.0-bb.0] - 2024-07-02

### Changed

- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.19.0` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.20.0`
- Updated upstream chart reference from `2.23.1` to `2.24.0`

## [2.23.1-bb.1] - 2024-06-21

### Changed

- Updated DEVELOPMENT_MAINTENANCE.md with instructions for integration testing in pipeline

## [2.23.1-bb.0] - 2024-05-24

### Changed

- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.18.1` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.19.0`
- Updated upstream chart reference from `2.22.4` to `2.23.1`

## [2.22.4-bb.5] - 2024-05-12

### Changed

- Updated `gluon` package dependency version from `0.4.10` to `0.5.0`

## [2.22.4-bb.4] - 2024-04-30

### Changed

- Updated `gluon` package dependency version from `0.4.9` to `0.4.10`

## [2.22.4-bb.3] - 2024-04-22

### Changed

- Updated `gluon` package dependency version from `0.4.8` to `0.4.9`

## [2.22.4-bb.2] - 2024-04-05

### Added

- Custom network policies

## [2.22.4-bb.1] - 2024-03-27

### Changed

- Changed 01-prometheus.cy.js to wait before the test handle early network errors on cypress tests

## [2.22.4-bb.0] - 2024-03-12

### Changed

- Updated upstream chart reference from `2.22.0` to `2.22.4`

## [2.22.0-bb.2] - 2024-03-08

### Changed

- Adding Sidecar to deny egress that is external to istio services
- Adding customServiceEntries to allow egress to override sidecar restraint

## [2.22.0-bb.1] - 2024-03-06

### Changed

- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.18.0` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.18.1`
- Updated `gluon` package dependency version from `0.4.7` to `0.4.8`

## [2.22.0-bb.0] - 2024-02-06

### Changed

- Updated upstream chart reference from `2.21.6` to `2.22.0`
- Updated image from `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.17.5` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.18.0`

## [2.21.6-bb.2] - 2024-02-02

### Changed

- Updated to Gluon 0.4.7
- Removed cypress config as it is now coming from gluon
- Updated cypress tests to use new shared commands from gluon

## [2.21.6-bb.1] - 2024-01-25

### Changed

- Changed cypress tests to work with version of Grafana

## [2.21.6-bb.0] - 2024-01-16

### Changed

- Updated upstream chart reference from `2.16.0` to `2.21.6`
- Updated image and IronBank repo reference from `registry1.dso.mil/ironbank/nirmata/policy-reporter/policy-reporter:2.12.0` to `registry1.dso.mil/ironbank/opensource/kyverno/policy-reporter:2.17.5`
- Updated `gluon` package dependency version from `0.4.1` to `0.4.7`

## [2.16.0-bb.6] - 2023-10-11

### Changed

- Harden API token automounting behavior of ServiceAccount/Pod

## [2.16.0-bb.5] - 2023-10-5

### Changed

- Exposed automountServiceAccountToken as a value

## [2.16.0-bb.4] - 2023-9-19

### Changed

- Upgraded gluon to 0.4.1
- Upgraded cypress tests to work with cypress 13.x

## [2.16.0-bb.3] - 2023-9-14

### Changed

- Made test resources conditional on bbtests.enabled

## [2.16.0-bb.2] - 2023-08-30

### Changed

- Updated Prometheus Cypress Test to work with updated UI
- Added Grafana as a dependency to Cypress Test

## [2.16.0-bb.1] - 2023-03-15

### Changed

- Update chart name to match bb values file

## [2.16.0-bb.0] - 2023-02-01

### Changed

- Update application to 2.10.4 and chart to 2.12.0

## [2.13.5-bb.1] - 2023-01-17

### Changed

- Update gluon to new registry1 location + latest version (0.3.2)

## [2.13.5-bb.0] - 2022-12-13

### Changed

- Updated chart to 2.13.5 upstream version, updated reporter images to 2.10.4 (reporter).

## [2.13.4-bb.1] - 2022-12-06

### Changed

- Enabled mTLS for Kyverno Reporter metrics
- updated gluon to  0.3.1

## [2.13.4-bb.0] - 2022-11-17

### Changed

- Updated chart to 2.13.4 upstream version, updated reporter images to 2.10.3 (reporter).  Updated ui to 2.6.5

## [2.13.1-bb.0] - 2022-10-20

### Changed

- Updated chart to 2.13.1 upstream version, updated images to 2.10.1 (reporter), 2.6.4 (UI) and 1.4.3 (plugin)

## [2.13.0-bb.0] - 2022-09-23

### Changed

- Updated chart to 2.13.0 upstream version, updated images to 2.10.0 (reporter) and 1.4.2 (plugin)

## [2.11.3-bb.0] - 2022-09-06

### Changed

- Updated chart to 2.11.3 upstream version, updated images to 2.8.3 (reporter) and 1.4.1 (plugin)
- Fixed dashboard check in cypress test

## [2.11.0-bb.0] - 2022-08-12

### Changed

- Updated chart to 2.11.0 upstream version, updated images to 2.8.0 (reporter) and 1.4.0 (plugin)
- Updated all images to Ironbank

### Added

- Added upgrade documentation
- Added `runAsGroup` to fix Kyverno violation

## [2.7.0-bb.0] - 2022-03-14

### Changed

- Update application to 2.4.0 and chart to 2.7.0

## [2.6.2-bb.0] - 2022-03-14

### Added

- Initial upstream Helm chart
- Required documents
