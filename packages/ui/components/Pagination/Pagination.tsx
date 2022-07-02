import { PaginationLayout } from "./Pagination.styles"

export const Pagination = () => {
    return <PaginationLayout.PaginationContainer>
                {/* <PaginationLayout.PaginationTitle>Pagination</PaginationLayout.PaginationTitle> */}
                <PaginationLayout.PaginationText>Previous</PaginationLayout.PaginationText>
                <PaginationLayout.PaginationDiv>
                    <PaginationLayout.PaginationNumberSelected>1</PaginationLayout.PaginationNumberSelected>
                    <PaginationLayout.PaginationNumberUnSelected>2</PaginationLayout.PaginationNumberUnSelected>
                    <PaginationLayout.PaginationNumberUnSelected>3</PaginationLayout.PaginationNumberUnSelected>
                    <PaginationLayout.PaginationNumberUnSelected>...</PaginationLayout.PaginationNumberUnSelected>
                    <PaginationLayout.PaginationNumberUnSelected>28</PaginationLayout.PaginationNumberUnSelected>
                    <PaginationLayout.PaginationNumberUnSelected>29</PaginationLayout.PaginationNumberUnSelected>
                    <PaginationLayout.PaginationNumberUnSelected>30</PaginationLayout.PaginationNumberUnSelected>
                </PaginationLayout.PaginationDiv>
                <PaginationLayout.PaginationText>Next</PaginationLayout.PaginationText>

        </PaginationLayout.PaginationContainer>
}

