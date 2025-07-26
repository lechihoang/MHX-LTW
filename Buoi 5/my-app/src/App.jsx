import Form from "./components/Form.jsx";
import ContactList from "./components/ContactList";

function App() {
  const contacts = [
    { name: "Alice Johnson", city: "New York" },
    { name: "Bob Smith", city: "Los Angeles" },
    { name: "Charlie Brown", city: "Chicago" },
    { name: "David Williams", city: "Houston" },
    { name: "Emma Davis", city: "Phoenix" },
  ];

  return (
    <div className="bg-gray-300 min-h-screen px-4 md:px-10 py-6 md:py-12">
      {/* Title */}
      <h1 className="text-black text-3xl font-bold">Contact Book</h1>
      <h3 className="text-black text-lg mb-8">
        Keep track of where your friends live
      </h3>

      {/* Form */}
      <Form />
      {/* Contacts */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
