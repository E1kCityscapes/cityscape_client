import {
    Chapters
}
from '/imports/api/chapters.js';

Chapters.update({"id":"neighborhoods"}, {
    "id": "neighborhoods",
    "info": {
        "name": "Neighborhoods",
        "num": 1,
        "description": "A city is home to countless people. In this unit, you'll make sure everyone has a place to live.",
        "thumbnail": "neighborhoods.png",
        "colors": {
            "primary": "#FFFFFF",
            "secondary": "#FFFFFF"
        },
        "skills": [
            {
                "id": "arithmetic",
                "name": "Arithmetic"
            },
            {
                "id": "order_of_operations",
                "name": "Order of Operations"
            }
        ]
    }
}, {
    upsert: true
});