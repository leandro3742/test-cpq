export const Antenna = {
    "id": "cpq://id_client/antenna",
    "title": "antenna",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "ports": [
            {
                "fieldName": "pcb connector",
                "port": [
                    {
                        "schemas": "pcb connector"
                    }
                ]
            }
        ]
    },
    "required": [],
    "additionalProperties": false
}