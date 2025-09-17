import { prisma } from "../index";

class FavoritesService {
    async getFavorites(cid: string) {
        return prisma.favorite.findMany({
            where: { clientId: cid },
            include: { product: true }
        })
    }

     async createFavorite(clientId: string, productId: string) {
        await prisma.favorite.create({ data: { clientId, productId } })
     }

    async deleteFavorite(clientId: string, productId: string) {
        await prisma.favorite.delete({ where: { clientId_productId: { clientId, productId } } })
    }
}


export const favoritesService = new FavoritesService();