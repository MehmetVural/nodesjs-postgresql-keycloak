This directory contains a Jenkinsfile which can be used to build
workbc-api using an OpenShift build pipeline.

To do this, run:

```bash
# create the nodejs example as usual
oc new-app https://github.com/MehmetVural/nodesjs-postgresql-keycloak

# now create the pipeline build controller from the openshift/pipeline
# subdirectory
oc new-app https://github.com/MehmetVural/nodesjs-postgresql-keycloak \
  --context-dir=openshift/pipeline --name workbc-api-pipeline
```
