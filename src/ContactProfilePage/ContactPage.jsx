import { useEffect, useState } from 'react';
import Sidebar from "../maincomponents/Sidebar";
import "./ContactPage.css";
import { useParams } from 'react-router-dom';

function ContactPage() {



    const { id: pathID } = useParams();
    console.log(pathID);

    const [contact, setContact] = useState({});

    // Fetch from correct API
    useEffect(() => {
        const path = `https://boolean-uk-api-server.fly.dev/dagandreas/contact/${pathID}`;
        fetch(path)
            .then((res) => res.json())
            .then((data) => setContact(data))
            .catch((error) => console.log("error in fetching contact", error));

        console.log("Fetched from path:", path);
    }, [pathID]);

    // Update input fields with data from contact
    useEffect(() => {
        if (contact) {
            setFirstName(contact.firstName || '');
            setLastName(contact.lastName || '');
            setUsername(contact.username || '');
            setEmail(contact.email || '');
            setStreet(contact.street || '');
            setSuite(contact.suite || '');
            setCity(contact.city || '');
            setZipcode(contact.zipcode || '');
            setPhone(contact.phone || '');
            setWebsite(contact.website || '');
            setCompanyName(contact.companyName || '');
            setCatchPhrase(contact.catchPhrase || '');
            setBusinessStatement(contact.jobTitle || '');
        }
    }, [contact]);

    // useStates for input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');

    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');

    const [companyName, setCompanyName] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [businessStatement, setBusinessStatement] = useState('');

    const takeInput = (event, setter) => {
        const text = event.target.value;
        setter(text);
    }

    // Function to handle save button click
    const handleSave = () => {
        const data = {
            firstName,
            lastName,
            username,
            email,
            street,
            suite,
            city,
            zipcode,
            phone,
            website,
            companyName,
            catchPhrase,
            businessStatement,
        };

        const path = `https://boolean-uk-api-server.fly.dev/dagandreas/contact/${pathID}`;

        fetch(path, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Success:", data);
                // Optionally reset fields or provide feedback
                // setFirstName('');
                // setLastName('');
                // ... reset other fields if needed
            })
            .catch((error) => {
                console.error("Error when saving contact", error);
            });
    };

    return (
        <>
            <div className="contact-container">
                <Sidebar />
                <div className="forms-container">
                    <h2>Contact</h2>

                    {/* Top section with Account Info and Address side by side */}
                    <div className="top-section">
                        <div className="account-info">
                            <h3>Account Info</h3>
                            <div className="input-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => takeInput(e, setFirstName)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => takeInput(e, setLastName)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => takeInput(e, setUsername)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => takeInput(e, setEmail)}
                                />
                            </div>
                        </div>

                        <div className="address-info">
                            <h3>Address</h3>
                            <div className="input-group">
                                <label htmlFor="street">Street</label>
                                <input
                                    type="text"
                                    id="street"
                                    value={street}
                                    onChange={(e) => takeInput(e, setStreet)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="suite">Suite</label>
                                <input
                                    type="text"
                                    id="suite"
                                    value={suite}
                                    onChange={(e) => takeInput(e, setSuite)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => takeInput(e, setCity)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="zipcode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipcode"
                                    value={zipcode}
                                    onChange={(e) => takeInput(e, setZipcode)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom section with Contact Info and Company Info side by side */}
                    <div className="bottom-section">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <div className="input-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => takeInput(e, setPhone)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    value={website}
                                    onChange={(e) => takeInput(e, setWebsite)}
                                />
                            </div>
                        </div>

                        <div className="company-info">
                            <h3>Company Info</h3>
                            <div className="input-group">
                                <label htmlFor="companyName">Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    value={companyName}
                                    onChange={(e) => takeInput(e, setCompanyName)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="catchPhrase">Catch Phrase</label>
                                <input
                                    type="text"
                                    id="catchPhrase"
                                    value={catchPhrase}
                                    onChange={(e) => takeInput(e, setCatchPhrase)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="businessStatement">Business Statement</label>
                                <input
                                    type="text"
                                    id="businessStatement"
                                    value={businessStatement}
                                    onChange={(e) => takeInput(e, setBusinessStatement)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="save-button-container">
                        <button className="save-button" onClick={handleSave}>Save</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactPage;
