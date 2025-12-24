import { useState } from "react";

const App = () => {
 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const [showGreeting, setShowGreeting] = useState(false);

  
  const handleFoodChange = (food: string) => {
    setFavoriteFoods((prev) =>
      prev.includes(food)
        ? prev.filter((f) => f !== food) 
        : [...prev, food] 
    );
  };


  const handleDisplay = () => {
    setShowGreeting(true);
  };

 
  const handleClear = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setFavoriteFoods([]);
    setShowGreeting(false);
  };

  return (
  <div className="container">
    <h1>User Form</h1>

    <form>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div>
        <label>Favorite Foods:</label>
        <div className="checkbox-group">
          {["Chicken", "Beef", "Vegetables", "Dessert", "Pork"].map((food) => (
            <label key={food}>
              <input
                type="checkbox"
                checked={favoriteFoods.includes(food)}
                onChange={() => handleFoodChange(food)}
              />
              {food}
            </label>
          ))}
        </div>
      </div>
    </form>

    <button onClick={handleDisplay}>Display User</button>
    <button onClick={handleClear}>Clear</button>

    <div className="output">
      {showGreeting && (
        <p>
          Hello {firstname} {lastname}. You are {age} years old and your
          favorite foods are: {favoriteFoods.join(", ") || "None"}.
        </p>
      )}
    </div>
  </div>
);
}
export default App;
