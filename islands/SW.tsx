import { useState } from "preact/hooks";
import { useToast } from "./useToast.ts"
function SW() {
    const [loading, setLoading] = useState(false)
    const { showToast } = useToast()
    async function handleInstall() {
        const resp = await fetch("/sw-cache.json")
        const data = await resp.json()
        const keys = await caches.keys()
        for (const key of keys) {
            await caches.delete(key)
        }
        const cache = await caches.open("cache-v1")
        await cache.addAll(data)
        showToast({
            msg: "تم تحميل الدروس بنجاح",
            type: "info",
        })
    }
    return <div class="w-full py-3">
        <button onClick={handleInstall} disabled={loading} class="w-full btn btn-primary">
            {
                loading ? <span class="loading loading-spinner loading-xs"></span> : "تحميل الدروس"
            }
        </button>
    </div>;
}
export default SW;
