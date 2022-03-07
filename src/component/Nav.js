const docsUrl = "https://github.com/streamich/react-use/blob/master/docs/useGeolocation.md";

export default function Nav() {
    return(
        <nav class="navbar bg-primary">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl" href="/">useGeolocation</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><a href={docsUrl} target="__blank">Docs</a></li>
                </ul>
            </div>
        </nav>
    )
}