const Create = ({ onCreate }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value;
    if (!task) {
      return alert("Please enter a task.");
    }
    await onCreate(task);
    e.target.reset();
  };

  return (
    <div className="container">
      <form id="update-form" onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Task Title" / >
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;