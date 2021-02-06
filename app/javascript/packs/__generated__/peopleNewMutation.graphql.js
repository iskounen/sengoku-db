/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type peopleNewMutationVariables = {|
  name: string,
  birth: any,
  death: any,
|};
export type peopleNewMutationResponse = {|
  +createPerson: ?{|
    +person: {|
      +id: string,
      +name: string,
      +birth: any,
      +death: any,
    |}
  |}
|};
export type peopleNewMutation = {|
  variables: peopleNewMutationVariables,
  response: peopleNewMutationResponse,
|};
*/


/*
mutation peopleNewMutation(
  $name: String!
  $birth: ISO8601Date!
  $death: ISO8601Date!
) {
  createPerson(input: {name: $name, birth: $birth, death: $death}) {
    person {
      id
      name
      birth
      death
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "birth"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "death"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "birth",
            "variableName": "birth"
          },
          {
            "kind": "Variable",
            "name": "death",
            "variableName": "death"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreatePersonPayload",
    "kind": "LinkedField",
    "name": "createPerson",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "death",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "peopleNewMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "peopleNewMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a0d6553de61be2ed70a4c31669531aad",
    "id": null,
    "metadata": {},
    "name": "peopleNewMutation",
    "operationKind": "mutation",
    "text": "mutation peopleNewMutation(\n  $name: String!\n  $birth: ISO8601Date!\n  $death: ISO8601Date!\n) {\n  createPerson(input: {name: $name, birth: $birth, death: $death}) {\n    person {\n      id\n      name\n      birth\n      death\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f4d2ed134d4a1eb7e4658c86685b663';

module.exports = node;
