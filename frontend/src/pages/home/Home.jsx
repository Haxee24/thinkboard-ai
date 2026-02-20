import NotesCard from "../../components/Notes/NoteCard"

function Home() {
  return (
    <div className="flex gap-5 p-10 flex-wrap">
        <NotesCard title="First Note" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." createdAt="2024-06-01" />
        <NotesCard title="Second Note" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." createdAt="2024-06-02" />
        <NotesCard title="Third Note" content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." createdAt="2024-06-03" />
    </div>
  )
}

export default Home