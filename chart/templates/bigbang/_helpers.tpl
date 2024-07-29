{{/*
Bigbang labels
*/}}
{{- define "bigbang.labels" -}}
app: {{ template "policyreporter.name" . }}
{{- if .Chart.AppVersion }}
version: {{ .Chart.AppVersion | quote }}
{{- end }}
{{- end }}
