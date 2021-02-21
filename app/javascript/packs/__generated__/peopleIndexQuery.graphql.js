/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type peopleIndexQueryVariables = {||};
export type peopleIndexQueryResponse = {|
  +people: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +birth: any,
    +death: any,
  |}>
|};
export type peopleIndexQuery = {|
  variables: peopleIndexQueryVariables,
  response: peopleIndexQueryResponse,
|};
*/


/*
query peopleIndexQuery {
  people {
    id
    name
    birth
    death
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Person",
    "kind": "LinkedField",
    "name": "people",
    "plural": true,
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "peopleIndexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "peopleIndexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "40627533a2696a6615be13f7bd2d47c7",
    "id": null,
    "metadata": {},
    "name": "peopleIndexQuery",
    "operationKind": "query",
    "text": "query peopleIndexQuery {\n  people {\n    id\n    name\n    birth\n    death\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57f1bab62d3b27a0c09d0935cb825faa';

module.exports = node;
