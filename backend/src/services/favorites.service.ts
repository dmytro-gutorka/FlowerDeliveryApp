import { prisma } from "../index";

class FavoritesService {
    async getFavorites(cid: string) {
        return prisma.favorite.findMany({
            where: { clientId: cid },
            include: { product: true }
        })
    }

     async createFavorite() {

     }

}


export const favoritesService = new FavoritesService();