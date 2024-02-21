import { PageProps } from "$fresh/server.ts"
import { Partial } from "$fresh/runtime.ts"

export default function Layout({ Component }: PageProps) {
    // DO change location of the layout file or move it to _app.. 
    return (
        <div f-client-nav>
            <Partial name="layout">
                <Component />
            </Partial>
        </div>
    )
}
