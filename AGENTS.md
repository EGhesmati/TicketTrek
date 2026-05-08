# Support Desk API

## Endpoints

### GET /api/tickets
Get all tickets

### POST /api/tickets
Create new ticket
```json
{
  "id": "5",
  "title": "Ticket title",
  "body": "Description",
  "priority": "low",
  "user_email": "email@example.com"
}
```

### PATCH /api/tickets/[id]
Update ticket by ID
```json
{
  "title": "Updated title",
  "priority": "high"
}
```

### DELETE /api/tickets/[id]
Delete ticket by ID
