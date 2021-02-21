import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading'
import { GITHUB_REPO_SEARCH_QUERY } from '../../utils/grpahQlQuerys'
import ErrorHandler from '../error/ErrorHandler';
import { MESSAGES } from "../../constants/appConstant";

import './searchResult.scss'


/**
 * 
 * @param {*} props Component to display repos matching user search query
 */
const SearchResult = (props) => {
    let searchTxt = props.searchTxt

    //useQuery API of Apollo hooks to fetch the repositories matching search query
    const { loading, data, error } = useQuery(GITHUB_REPO_SEARCH_QUERY, {
        variables: { userId: searchTxt },
    });

    // Display loading Icon untill API returns data
    if (loading) {
        return <Loading className="loading" />
    }

    // In case of error, display a meaningful message to User
    if (error) {
        const isNetworkErr = !!error.networkError;
        const errMsg = isNetworkErr ? MESSAGES.GRAPHQL.GENERIC_ERROR : MESSAGES.GRAPHQL.DB_ERROR;
        return <ErrorHandler errMsg={errMsg} />
    }

    const repoCount = data.user.repositories.totalCount;
    const repoList = data.user.repositories.nodes;

    // GitHub UserName with no data in DB
    if (repoCount === 0) {
        return <ErrorHandler errMsg={MESSAGES.GRAPHQL.DB_ERROR} />
    }


    return (
        <div className="searchResult">
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Repo Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">User Permission</th>
                        <th scope="col">Repo URL</th>
                    </tr>
                </thead>
                <tbody>
                    {repoList.map((repo, index) => {
                        return <tr key={repo.id}>
                            <td scope="row">{index + 1}</td>
                            <td className="repoName">{repo.name}</td>
                            <td className="repoDesc">{repo.description || 'N/A'}</td>
                            <td className="repoDate">{repo.createdAt || 'N/A'}</td>
                            <td className="repoPermission">{repo.viewerPermission || 'N/A'}</td>
                            <td className="repoLink">
                                <a href={repo.url} target='_blank' rel="noopener noreferrer">
                                    Link
                                </a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}


SearchResult.propTypes = {
    repos: PropTypes.shape({
        //number of repos of a user in Github
        totalCount: PropTypes.number,
        // Contains the repository information
        nodes: PropTypes.array
    })
}

export default SearchResult