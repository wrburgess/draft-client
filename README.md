# draft-client

## models

### draft
* name
* season
* rounds
* picks
* state (started, paused, completed)

### pick
* draftId
* rosterId
* pieceId
* roundNumber
* pickNumber
* state (pending, skipped, filled)

### roster
* name
* userId
* state (live, auto, complete)

### slot
* rosterId
* name
* weight

### piece
* firstName
* lastName
* position

### user
* firstName
* lastName

```
[
 '{{repeat(100)}}',
 {
  id: '{{index}}',
  firstName: '{{firstName}}',
  lastName: '{{surname}}',
  position: '{{numeric(20,40)}}'
 }
]
```