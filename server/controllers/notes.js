let notes = [
  {
    id: "1",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "2",
    title: "Duis blandit",
    description:
      "Nam sed dignissim magna. Praesent imperdiet ut ipsum non mollis."
  },
  {
    id: "3",
    title: "Vestibulum",
    description: "Aliquam erat volutpat. Donec sit amet sapien leo."
  },
  {
    id: "4",
    title: "Quis purus venenatis",
    description: "Sed eu metus fermentum neque semper mollis sagittis at augue."
  },
  { id: "5", title: "Duis blandit lacus sem", description: "Lorem ipsum dolor" }
];

module.exports = {
  getNotes(req, res) {
    res.send(notes);
  },

  createNote(req, res) {
    notes = [
      ...notes,
      {
        ...req.body
      }
    ];
  },

  getNote(req, res) {
    res.send(notes.find(note => note.id === req.params.id));
  },

  editNote(req, res) {
    notes = notes.map(note => {
      if (note.id !== req.params.id) return note;
      const { title, description } = req.body;
      return {
        ...note,
        title,
        description
      };
    });
  },

  deleteNote(req, res) {
    notes = notes.filter(note => note.id !== req.params.id);
  }
};
