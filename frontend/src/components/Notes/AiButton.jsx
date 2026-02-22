function AiButton({content, setContent}) {
  const getAiResponse = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch(`http://localhost:4000/api/notes/ai-enhance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ content }),
      });
      if (!res.ok) {
        throw new Error("Failed to get AI response");
      }
      const data = await res.json();
      console.log("AI response:", data);
      setContent(data.aiContent);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button onClick={getAiResponse} className=" w-30 cursor-pointer flex items-center bg-green-500 border hover:border-amber-100 font-semibold text-black px-5 py-3 rounded-3xl">
      AI Rewrite
    </button>
  )
}

export default AiButton