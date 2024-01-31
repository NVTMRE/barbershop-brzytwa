const IG_TOKEN = process.env.IG_API_ACCESS_TOKEN

export async function getIGMedia () {
    try {
        const mediaIDs = await fetch(`https://graph.instagram.com/me/media?fields=id&access_token=${IG_TOKEN}`)
            .then(res => res.json())
            .then(res => res.data.map((item: any) => item.id))

        const data = await Promise.all(mediaIDs.map(async (id: string) => {
            const response = await fetch(`https://graph.instagram.com/${id}?fields=id,media_url,timestamp&access_token=${IG_TOKEN}`);
            return response.json();
        }));

        console.log(data)
        return ({
            status: true,
            data,
        })
    } catch (e) {
        return ({
            status: false,
            message: e
        })
    }
}