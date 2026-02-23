function AiButton({w, capt, content, setContent, setLoad, prompt}) {
  const getAiResponse = async (e) => {
    e.preventDefault();
    setLoad(true);
    try{
      const res = await fetch(`http://localhost:4000/api/notes/ai-enhance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ content,  long: prompt?true:false}),
      });
      if (!res.ok) {
        throw new Error("Failed to get AI response");
      }
      const data = await res.json();
      console.log("AI response:", data);
      setContent(data.aiContent);
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  }

  return (
    <button onClick={getAiResponse} className={`w-${w} cursor-pointer flex items-center bg-green-500 border hover:border-amber-100 font-semibold text-black px-5 py-3 rounded-3xl`}>
      {capt}
    </button>
  )
}

export default AiButton