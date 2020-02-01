import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import styles from '../css/pagination.module.scss'

const PaginationComponent = ({ currenPage, pageSize, totalCount ,onChangePage}) => {
    const totalPage = Math.ceil(totalCount / pageSize)
    // totalPage = 5 => [0, 1, 2, 3, 4]
    const pages = [...Array(totalPage).keys()]
    return (
        <div>
            <Pagination>
                {pages.map(page => (
                    <PaginationItem>
                        <PaginationLink className={styles.paginationLink} onClick={() => onChangePage(page + 1)}>{page + 1}</PaginationLink>
                    </PaginationItem>
                ))}
            </Pagination>
        </div>
    )
}
export default PaginationComponent
