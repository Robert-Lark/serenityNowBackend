const db = require("../data/config");


function find() {
    return db("staff");
}

function findById(id) {
    return db("staff").where("id", id).first();
}

function findBy(filter) {
    return db("staff")
			.select("id", "username", "password", "department")
            .where(filter)
}

async function add(data) {
    const [id] = await db("staff").insert(data);
    return findById(id);
}

module.exports = {
    add,
    find,
    findBy,
    findById,
};
