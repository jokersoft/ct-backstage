#!/usr/bin/env bash

kubectl config set-context --current --namespace=backstage

kubectl get pods --no-headers -o custom-columns=":metadata.name"

kubectl exec -it backstage-587db7bc99-7sw2j -- bash
