const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname,'./db/contacts.json') ;

function parseContacts(data) {
    return JSON.parse(data.toString());
}

function listContacts() {
    fs.readFile(contactsPath)
        .then((data) => {
            return parseContacts(data);
        })
        .then((list) => {
            return [...list].sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        })
        .then((result) => console.table(result))
        .catch((err) => console.log(err));
}

// listContacts();

function getContactById(contactId) {
    fs.readFile(contactsPath)
        .then((data) => {
            const contacts = parseContacts(data);
            return contacts;
        })
        .then((contacts) => {
            const contactsFilter = contacts.filter(
                (contact => contact.id === contactId)
            );
            if (contactsFilter.length > 0) {
                console.table(contactsFilter);
                return;
            }
            console.log(`There is no contact with the id: ${contactId}.`.red);
        })
        .catch((err) => console.log(err.message));
}

getContactById("drsAJ4SHPYqZeG-83QTVv");

function removeContact(contactId) {
    
}

function addContact(name, email, phone) {
    
}