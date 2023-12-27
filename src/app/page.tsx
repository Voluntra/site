const Home = () => {
  return (
    <main className="flex flex-col items-center p-page overflow-hidden">
      <div className="rounded-full border w-auto py-1 px-3 shadow-sm border-neutral-800 backdrop-blur-sm backdrop-filter bg-neutral-900">
        <p className="text-xs gradient-text">
          Developed by students, for students
        </p>
      </div>
      <h1 className="gradient-text select-none tracking-tight w-3/4 text-center text-7xl leading-none pb-2 font-semibold pt-5">
        Voluntra is a better way to volunteer
      </h1>
      <p className="text-neutral-500">
        Discover opportunities to volunteer in your community, track your hours,
        and integrate with Xello.
      </p>
    </main>
  );
};

export default Home;
