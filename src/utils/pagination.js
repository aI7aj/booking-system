export const getPagination = (page = 1, limit = 10) => {
    const offset = (page - 1) * limit
    return { limit: +limit, offset: +offset }
}

export const getPagingData = (data, page = 1, limit = 10) => {
    const { count: total, rows } = data
    const currentPage = +page
    const totalPages = Math.ceil(total / limit)
    return {
        total,
        totalPages,
        currentPage,
        limit: +limit,
        data: rows
    }
}