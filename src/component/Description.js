export default function Description({coords}) {
    return (
        <>
            <h1 class="text-5xl font-bold">{coords ? coords : "useGeolocation"}</h1>
            <p class="py-6">A React hook that grabs a user's coordinates.</p>
        </>
    )
}