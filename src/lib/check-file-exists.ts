import { promises as fs } from 'fs';
import path from 'path';

export async function checkImageExists(filename: string) {
    const publicDir = path.join(process.cwd(), 'public');
    const supportedExtensions = ['png', 'jpg', 'jpeg'];

    for (const ext of supportedExtensions) {
        const filePath = path.join(publicDir, `${filename}.${ext}`);
        try {
            await fs.access(filePath);
            return filePath;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
        }
    }

    return null
}
