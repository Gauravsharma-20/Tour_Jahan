/*
Checks: total == foreigners + local

adult+child+senior == total

male+female+others == total
set default of each field to 0


*/

export const bookingData = [
    {
        id:1,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-25T04:58:10.539+00:00",
        ownerId:"1",
        siteId:"2",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:2,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-25T04:58:10.539+00:00",
        ownerId:"6",
        siteId:"1",
        total:5,
        used:0,
        userDetails: {
            Foreigner:3,
            Loacal:2,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:3,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-31T04:58:10.539+00:00",
        ownerId:"6",
        siteId:"3",
        total:2,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:2,
            Adult:2,
            Child:0,
            Senior:0,
            Female:0,
            Male:2,
            Others:0
        }

    },
    {
        id:4,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-29T04:58:10.539+00:00",
        ownerId:"3",
        siteId:"3",
        total:5,
        used:0,
        userDetails: {
            Foreigner:5,
            Loacal:0,
            Adult:5,
            Child:0,
            Senior:0,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:5,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-29T04:58:10.539+00:00",
        ownerId:"5",
        siteId:"3",
        total:10,
        used:0,
        userDetails: {
            Foreigner:5,
            Loacal:5,
            Adult:8,
            Child:1,
            Senior:1,
            Female:3,
            Male:6,
            Others:1
        }

    },
    {
        id:6,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-26T04:58:10.539+00:00",
        ownerId:"1",
        siteId:"7",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:7,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-27T04:58:10.539+00:00",
        ownerId:"4",
        siteId:"5",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:8,
        Date: "2022-03-22T04:58:10.539+00:00",
        createdAt: "2022-03-25T04:58:10.539+00:00",
        ownerId:"5",
        siteId:"2",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:9,
        Date: "2022-03-23T04:58:10.539+00:00",
        createdAt: "2022-03-26T04:58:10.539+00:00",
        ownerId:"1",
        siteId:"2",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    },
    {
        id:10,
        Date: "2022-03-23T04:58:10.539+00:00",
        createdAt: "2022-03-28T04:58:10.539+00:00",
        ownerId:"1",
        siteId:"2",
        total:5,
        used:0,
        userDetails: {
            Foreigner:0,
            Loacal:5,
            Adult:3,
            Child:1,
            Senior:1,
            Female:3,
            Male:2,
            Others:0
        }

    }

]