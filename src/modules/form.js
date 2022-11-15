const form = () => `
<form class="form container">
  <h2>Add Your Score</h2>

  <label for="name">Name</label>
  <input id="name" type="text" name="name" placeholder="Your Name" />

  <label for="score">Score</label>
  <input id="score" type="text" name="score" placeholder="Your Score"/>

  <div class="btn-container">
    <button type="submit" class="btn">Submit</button>
  </div>
</form>
`;
export default form;