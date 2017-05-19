import {
    Chapters
}
from '/imports/api/chapters.js';

Chapters.update({"id":"neighborhoods"}, {
    "id": "neighborhoods",
    "info": {
        "name": "Neighborhoods",
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
            }
        ]
    }
}, {
    upsert: true
})