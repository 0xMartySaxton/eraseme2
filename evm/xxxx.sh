#!/bin/bash

    [[ $1 =~ $2 ]]; echo ${BASH_REMATCH[1]}
