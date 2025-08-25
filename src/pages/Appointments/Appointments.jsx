import React, { useState, useEffect } from 'react';
import { Table, Badge, Form, InputGroup, Button, Pagination, Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Appointments.css'; 

const mockAppointments = [
    { id: 1671, type: 'Checkup', residentName: 'Kenneth Hoffman', dob: '04/25/1988', status: 'Scheduled', providerName: 'Ash.McCollum', clientName: 'Newton Wellesley Orthopedic Associates', facilityName: 'Stephen Schroeder' },
    { id: 1682, type: 'Checkup', residentName: 'Michael Duffy', dob: '04/16/1988', status: 'InProgress', providerName: 'N.Dreamer', clientName: 'Midwest Center for Joint Replacement', facilityName: 'Christian Lace-Ensslin' },
    { id: 1683, type: 'Checkup', residentName: 'Linda Heard', dob: '04/16/1980', status: 'Signed & Locked', providerName: 'H.Mullins', clientName: 'Neurosurgery Orthopedics and Spine Specialists PC', facilityName: 'Alexis Crawley' },
    { id: 1684, type: 'Checkup', residentName: 'Maureen Shapiro', dob: '05/02/1987', status: 'Scheduled', providerName: 'L.Khoohaba', clientName: 'Couture Dermatology and Plastic Surgery', facilityName: 'Clint Brian Blackwood' },
    { id: 1685, type: 'Checkup', residentName: 'Darlene Pence', dob: '04/25/1985', status: 'Not Seen', providerName: 'B.Malakoff', clientName: 'Specialty Orthopedics PC Gainesville', facilityName: 'Scott McCartney' },
    { id: 1686, type: 'Checkup', residentName: 'Maria Forjan', dob: '04/16/1984', status: 'Scheduled', providerName: 'A.Medina', clientName: 'Napa Valley Orthopaedics', facilityName: 'Patrick Roggieri' },
    { id: 1687, type: 'Checkup', residentName: 'Thomas Muenninghoff', dob: '05/05/1999', status: 'InProgress', providerName: 'k.boudreau', clientName: 'Atlantic Orthopaedics and Sports Medicine', facilityName: 'Selene Parrish' },
    { id: 1688, type: 'Checkup', residentName: 'Nela Solomon', dob: '05/07/1989', status: 'All', providerName: 'D.Warner', clientName: 'Bluegrass Orthopaedics PSC', facilityName: 'Hewatt Mac Sims' },
    { id: 1689, type: 'Checkup', residentName: 'Kimberly Wallace', dob: '05/09/1991', status: 'Scheduled', providerName: 'S.Stremikova', clientName: 'Ellis and Badenhausen Orthopaedics PSC', facilityName: 'Matthew McCabe' },
    // Add more mock data as needed to test pagination
];

const AppointmentList = () => {
    const [appointments, setAppointments] = useState(mockAppointments);
    const [filteredAppointments, setFilteredAppointments] = useState(mockAppointments);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

   
    useEffect(() => {
        let result = appointments;

        if (activeFilter !== 'All') {
            result = result.filter(apt => apt.status.replace(/\s/g, '') === activeFilter);
        }

      
        if (searchTerm) {
            result = result.filter(apt =>
                Object.values(apt).some(val =>
                    String(val).toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

        setFilteredAppointments(result);
        setCurrentPage(1); 
    }, [activeFilter, searchTerm, appointments]);

   
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Scheduled': return 'primary';
            case 'InProgress': return 'warning';
            case 'Signed & Locked': return 'success';
            case 'Not Seen': return 'danger';
            default: return 'secondary';
        }
    };

    
    const filters = ['All', 'Scheduled', 'InProgress', 'Signed & Locked', 'Not Seen'];
    const filterCounts = {
        All: appointments.length,
        Scheduled: appointments.filter(a => a.status === 'Scheduled').length,
        InProgress: appointments.filter(a => a.status === 'InProgress').length,
        'Signed & Locked': appointments.filter(a => a.status === 'Signed & Locked').length,
        'Not Seen': appointments.filter(a => a.status === 'Not Seen').length,
    };

    return (
        <div className="appointment-list-container">
            
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                <div className="filter-tabs">
                    {filters.map(filter => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? 'primary' : 'outline-secondary'}
                            onClick={() => setActiveFilter(filter)}
                            className="me-2 mb-2"
                        >
                            {filter.replace(/([A-Z])/g, ' $1').trim()} <Badge bg="light" text="dark">{filterCounts[filter]}</Badge>
                        </Button>
                    ))}
                </div>
                <div className="rows-text mb-2">ROWS: 0</div>
            </div>

            <div className="toolbar d-flex flex-wrap justify-content-between align-items-center mb-3">
                <InputGroup className="search-bar">
                    <Form.Control
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-secondary"><i className="bi bi-search"></i></Button>
                </InputGroup>
                <div className="action-buttons mt-2 mt-md-0">
                    <Button variant="outline-secondary" className="me-2"><i className="bi bi-funnel-fill"></i></Button>
                    <Button variant="outline-secondary"><i className="bi bi-three-dots-vertical"></i></Button>
                </div>
            </div>

            {/* Appointments Table */}
            <div className="table-responsive">
                <Table striped bordered hover className="appointments-table">
                    <thead>
                        <tr>
                            <th><Form.Check type="checkbox" /></th>
                            <th>APPOINTMENT.</th>
                            <th>TYPE</th>
                            <th>RESIDENT NAME</th>
                            <th>DOB</th>
                            <th>STATUS</th>
                            <th>PROVIDER NAME</th>
                            <th>CLIENT NAME</th>
                            <th>FACILITY NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(apt => (
                            <tr key={apt.id}>
                                <td><Form.Check type="checkbox" /></td>
                                <td>{apt.id}</td>
                                <td>{apt.type}</td>
                                <td><a href="#">{apt.residentName}</a></td>
                                <td>{apt.dob}</td>
                                <td><Badge bg={getStatusBadge(apt.status)}>{apt.status}</Badge></td>
                                <td>{apt.providerName}</td>
                                <td>{apt.clientName}</td>
                                <td>{apt.facilityName}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Pagination and Items per page */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
                <div className="items-per-page-selector">
                    <Form.Select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        style={{ width: 'auto' }}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </Form.Select>
                </div>
                <Pagination>
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                </Pagination>
            </div>
        </div>
    );
};

export default AppointmentList;