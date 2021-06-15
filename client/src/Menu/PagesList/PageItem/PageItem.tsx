import React from 'react';
import { PageData } from '../../../models/PageData';
import "./PageItem.css";

export const PageItem: React.FC<{page: PageData}> = ({ page }) => {
    return (
        <a key={page._id} className="page-item" href="#">
            <span className="page-item__title">
                {page.title}
            </span>
        </a>
    )
}
