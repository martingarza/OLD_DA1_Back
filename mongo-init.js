db.createUser(
    {
        user: "root",
        pwd: "Admin.Root.6699",
        roles: [
            {
                role: "readWrite",
                db: "app_distrib"
            }
        ]
    }
);