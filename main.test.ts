import { describe, expect, it } from "bun:test";
import app from "./src/index";

describe('first basic api test', () => {
    it('should return 200 response', async () => {
        const req = new Request('http://localhost/')
        const res = await app.fetch(req)
        expect(res.status).toBe(200)
    })
})

describe('auth api test', () => {
    it('should return 200 response', async () => {
        const req = new Request('http://localhost:3000/auth/page', { headers: { 'Authorization': 'Bearer secretjsontoken' } })
        const res = await app.fetch(req)
        expect(res.status).toBe(200)
    })
})