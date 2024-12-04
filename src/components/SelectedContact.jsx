import React, { useState, useEffect } from "react";

export default function SelectedContact({ contactId }) 
{
    const [contact, setContact] = useState(null);

    useEffect(() => 
    {
        async function fetchContactDetails() 
        {
            try 
            {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`);
                const result = await response.json();
                setContact(result);
            } 
            catch (error) 
            {
                console.error("Error fetching contact details:", error);
            }
        }

        if (contactId) 
        {
            fetchContactDetails();
        }
    }, [contactId]);

    if (!contact) 
    {
        return null
    }

    return (
            <div>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
            </div>);
}
