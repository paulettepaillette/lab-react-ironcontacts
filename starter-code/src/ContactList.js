import React from "react";

import contacts from './contacts.json'

class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ironContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
        };
    
        // console.log(contacts);
    }


    addContact() {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        console.log("Add a NEW CONTACT! 😎", randomContact);

        const { ironContacts } = this.state;
        ironContacts.push(randomContact);

        // this setState is to update the code inside the new array
        // tell React to update the DOM with setState()
        this.setState({ ironContacts });

        console.log(ironContacts);
    }


    sortName() {
        const { ironContacts } = this.state;

        ironContacts.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        })

        this.setState({ ironContacts });
    }

    sortPopularity() {
        const { ironContacts } = this.state;

        ironContacts.sort(function(a, b){
            if(a.popularity > b.popularity) return -1;
            if(a.popularity < b.popularity) return 1;
            return 0;
        })

        this.setState({ ironContacts });
    }

    deleteContact(contactIndex) {
        const { ironContacts } = this.state;

        ironContacts.splice(contactIndex, 1);
        
        this.setState({ ironContacts });
    }

    render() {
        const { ironContacts } = this.state;

        return (
            
            <section>
                <h2>IronContacts</h2>

                <button onClick={() => this.addContact()}>
                    Add Random Contact
                </button>

                <button className="sortname-btn" onClick={() => this.sortName()}>
                    Sort By Name
                </button>

                <button className="sortpop-btn" onClick={() => this.sortPopularity()}>
                    Sort By Popularity
                </button>

                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th> 
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                            {ironContacts.map((oneContact, index) => 
                            <tr key={index}>
                                <td><img src={oneContact.pictureUrl} height="200px" alt="contact-image"/></td> 
                                <td>{oneContact.name}</td>
                                <td>{oneContact.popularity}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => this.deleteContact(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </section>
        );
    }
}

export default ContactList;


