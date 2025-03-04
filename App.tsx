import React, { useState } from 'react';
import { Menu, ChevronRight, CreditCard, Building2, Briefcase, Users, BarChart3, FileText, Bell, ShieldCheck, HelpCircle, Gift, Settings, BookOpen, User, FileSpreadsheet, Wallet, CircleDollarSign, Star, Search, Plus, Edit, Trash, CheckCircle, ArrowLeft, Eye } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const customers = [
    { id: 1, name: 'Sunil Gavaskar', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '02-04-2025', address: 'N/A' },
    { id: 2, name: 'Vineet', email: 'vineet@mailinator.com', phone: '7976636558', paymentOnFile: 'Not Available', createdDate: '01-29-2025', address: '123 Main St, Mumbai' },
    { id: 3, name: 'V R', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '12-09-2024', address: 'N/A' },
    { id: 4, name: 'No Name', email: 'asdf', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '12-04-2024', address: 'N/A' },
    { id: 5, name: 'No Name', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '06-17-2024', address: 'N/A' },
    { id: 6, name: 'Abhishek Jangid', email: 'abhijangid2525@gmail.com', phone: '3467788988', paymentOnFile: true, createdDate: '05-20-2024', address: '456 Park Ave, Delhi' },
    { id: 7, name: 'Abhi', email: 'kushijangid.jangid@gmail.com', phone: '3557568886', paymentOnFile: 'Not Available', createdDate: '05-17-2024', address: 'N/A' },
    { id: 8, name: 'Ramu', email: 'cabreal315@pcicty.com', phone: '5522114455', paymentOnFile: 'Not Available', createdDate: '04-30-2024', address: '789 Oak St, Bangalore' },
    { id: 9, name: 'Shok Kumar A', email: 'mowu3444@em2lab.com', phone: '8855222311', paymentOnFile: 'Not Available', createdDate: '04-30-2024', address: 'N/A' },
    { id: 10, name: 'Check Live', email: 'N/A', phone: '7987897987', paymentOnFile: 'Not Available', createdDate: '04-30-2024', address: 'N/A' },
    { id: 11, name: 'Ram Verma', email: 'ramkumar@mailinator.com', phone: '6464081541', paymentOnFile: 'Not Available', createdDate: '04-29-2024', address: '321 Pine St, Chennai' },
    { id: 12, name: 'Aa', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '03-15-2024', address: 'N/A' },
    { id: 13, name: 'Check One', email: 'chk@mailinator.com', phone: '2546987935', paymentOnFile: 'Not Available', createdDate: '02-27-2024', address: 'N/A' },
    { id: 14, name: 'Jj', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '01-19-2024', address: 'N/A' },
    { id: 15, name: 'Did', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '01-08-2024', address: 'N/A' },
    { id: 16, name: 'Ff Rrr', email: 'N/A', phone: '2085886968', paymentOnFile: 'Not Available', createdDate: '01-08-2024', address: 'N/A' },
    { id: 17, name: 'Bbs', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '01-05-2024', address: 'N/A' },
    { id: 18, name: 'Developer Of PineSucceed', email: 'developerofpinesucceed@gmail.com', phone: '2019088204', paymentOnFile: 'Not Available', createdDate: '01-03-2024', address: '555 Tech Blvd, Hyderabad' },
    { id: 19, name: 'Sachin Tendulkar', email: 'developerofpinesucceed@gmail.com', phone: '2085813709', paymentOnFile: 'Not Available', createdDate: '01-03-2024', address: '777 Cricket Lane, Mumbai' },
    { id: 20, name: 'Fff Ggh', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '11-06-2023', address: 'N/A' },
    { id: 21, name: 'Ghh Dgd', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '11-03-2023', address: 'N/A' },
    { id: 22, name: 'Erff', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '11-03-2023', address: 'N/A' },
    { id: 23, name: 'Fgg', email: 'N/A', phone: 'N/A', paymentOnFile: 'Not Available', createdDate: '11-01-2023', address: 'N/A' },
    { id: 24, name: 'Web App', email: 'webapp@mailinator.com', phone: '8552145252', paymentOnFile: true, createdDate: '09-15-2023', address: '999 Web Ave, Pune' },
    { id: 25, name: 'ManojClevick Ck', email: 'manojclevick@mailinator.com', phone: '2554545545', paymentOnFile: true, createdDate: '08-24-2023', address: '888 Tech Park, Gurgaon' },
  ];

  const handleViewProfile = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleBackToCustomers = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-[180px] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="text-blue-500 font-bold text-xl">
              <span className="flex items-center">
                <Building2 className="mr-1" size={24} />
                <span>Sky<br />Systemz</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="py-2 border-b border-gray-200">
            <p className="px-4 text-xs text-gray-500 mb-1">Main</p>
            <div 
              className={`${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'} px-4 py-2 flex items-center cursor-pointer`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Briefcase size={16} className="mr-2" />
              <span>Get Started</span>
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <CreditCard size={16} className="mr-2" />
              <span>Digit POS</span>
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <Building2 size={16} className="mr-2" />
              <span>SkyFi</span>
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                <span>Employees</span>
              </div>
              <ChevronRight size={16} />
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <BarChart3 size={16} className="mr-2" />
                <span>Transactions</span>
              </div>
              <ChevronRight size={16} />
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <FileText size={16} className="mr-2" />
              <span>Reports</span>
            </div>
          </div>

          <div className="py-2 border-b border-gray-200">
            <p className="px-4 text-xs text-gray-500 mb-1">Customer</p>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <FileSpreadsheet size={16} className="mr-2" />
              <span>Invoicing</span>
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <Bell size={16} className="mr-2" />
              <span>Disclosures</span>
            </div>
            <div 
              className={`${activeTab === 'customers' ? 'bg-black text-white' : 'hover:bg-gray-100'} px-4 py-2 flex items-center cursor-pointer`}
              onClick={() => setActiveTab('customers')}
            >
              <User size={16} className="mr-2" />
              <span>Customers</span>
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <FileText size={16} className="mr-2" />
                <span>Contract</span>
              </div>
              <ChevronRight size={16} />
            </div>
          </div>

          <div className="py-2 border-b border-gray-200">
            <p className="px-4 text-xs text-gray-500 mb-1">Items</p>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <Briefcase size={16} className="mr-2" />
                <span>Product/Services</span>
              </div>
              <ChevronRight size={16} />
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <Wallet size={16} className="mr-2" />
                <span>Subscription Plan</span>
              </div>
              <ChevronRight size={16} />
            </div>
          </div>

          <div className="py-2">
            <p className="px-4 text-xs text-gray-500 mb-1">Extra</p>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <Gift size={16} className="mr-2" />
                <span>Gift Card</span>
              </div>
              <ChevronRight size={16} />
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100 justify-between">
              <div className="flex items-center">
                <Settings size={16} className="mr-2" />
                <span>Store Settings</span>
              </div>
              <ChevronRight size={16} />
            </div>
            <div className="px-4 py-2 flex items-center hover:bg-gray-100">
              <BookOpen size={16} className="mr-2" />
              <span>Booking List</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 border border-gray-300 rounded-md flex items-center text-sm">
              <Briefcase size={16} className="mr-1" />
              Get Started
            </button>
            <span className="text-sm font-medium">PineSucceed</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
              P
            </div>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          /* Dashboard Content */
          <div className="p-6">
            {/* Feature Spotlight */}
            <div className="bg-white rounded-lg overflow-hidden mb-6 relative">
              <div className="bg-blue-500 text-white p-6 flex">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">Feature Spotlight!</h2>
                  <p className="mb-1">Revolutionize your workflow with HotSpot Contracts!</p>
                  <p>Go paperless and seamless. Embrace the future of contract management!</p>
                </div>
                <div className="w-1/3 relative">
                  <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Contract Management" className="absolute bottom-0 right-0" />
                </div>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 rounded-full p-1">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Build Your Business */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-500 mr-3">
                      <Briefcase size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Build Your Business</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Get help now! Get access to our dedicated account management for business setup and premium support.</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create Business Profile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Add Employees and Permissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create Products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create Customers</span>
                    </li>
                  </ul>
                </div>

                {/* Customize Your Business */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mr-3">
                      <Settings size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Customize Your Business</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Customize the tools used to promote and sell your products and services.</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Invoicing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Subscriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Online Store</span>
                    </li>
                  </ul>
                </div>

                {/* Chargeback Protection */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mr-3">
                      <ShieldCheck size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Chargeback Protection</h2>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create a contract</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create a disclosure</span>
                    </li>
                  </ul>
                </div>

                {/* Sky Systemz Support */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mr-3">
                      <HelpCircle size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Sky Systemz support</h2>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">+1 (800) 771-6950</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">support@skysystemz.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Add Payments */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-500 mr-3">
                      <CreditCard size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Add Payments</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Accept card payments in minutes. Answer a few questions and allow customers to complete payments using Sky.</p>
                  <div className="flex items-start mb-2">
                    <div className="w-5 h-5 bg-green-100 rounded-sm flex items-center justify-center text-green-500 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Congratulations,</span>
                      <span className="text-gray-600"> you have been approved for payments!</span>
                    </div>
                  </div>
                </div>

                {/* Add SkyFi Business Checking */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mr-3">
                      <Building2 size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Add SkyFi Business Checking</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Receive faster deposits and get 1% cash back on all debit card spend while using Sky to sync your employees and customers. Once connected, you can apply for Same-Day ACH Payments for $3 per.</p>
                  <div className="flex items-center text-sm text-yellow-500">
                    <div className="w-4 h-4 rounded-full border border-yellow-500 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span>Pending for verification</span>
                  </div>
                </div>

                {/* Add Payroll */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mr-3">
                      <CircleDollarSign size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Add Payroll</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Payroll, simplified! Quickly add employees, wages, and get them paid.</p>
                  <div className="text-sm">
                    <span className="text-blue-500">• Apply for Payroll Services</span>
                  </div>
                </div>

                {/* Premium Services */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-500 mr-3">
                      <Star size={20} />
                    </div>
                    <h2 className="text-lg font-bold">Premium Services</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Add-ons that give your business a competitive advantage when coupled with Sky's free platform.</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Upgrade Your Experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Create Customer Disclosures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Digitize Your Contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span className="text-blue-500">Host and Build Website</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && !selectedCustomer && (
          /* Customers Management Content */
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Customer Management</h1>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Table Header with Actions */}
              <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Show</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <span className="text-sm">Entries</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="border border-gray-300 rounded-md pl-3 pr-10 py-1.5 text-sm w-64"
                    />
                    <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  
                  <button className="bg-black text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                    <Users size={16} className="mr-1" />
                    Merge Customer
                  </button>
                  
                  <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm flex items-center">
                    <Plus size={16} className="mr-1" />
                    Create Customer
                  </button>
                </div>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-3 w-8">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Phone Number</th>
                      <th className="px-4 py-3">Payment on File</th>
                      <th className="px-4 py-3">Created Date</th>
                      <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {customers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">{customer.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{customer.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{customer.phone}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {customer.paymentOnFile === true ? (
                            <div className="flex justify-center">
                              <CheckCircle size={18} className="text-green-500" />
                            </div>
                          ) : (
                            <span>{customer.paymentOnFile}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">{customer.createdDate}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex justify-center space-x-2">
                            <button 
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleViewProfile(customer)}
                            >
                              <Eye size={16} />
                            </button>
                            <button className="text-blue-500 hover:text-blue-700">
                              <Edit size={16} />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-700">
                  Showing 1 to 25 of 30 entries
                </div>
                <div className="flex space-x-1">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50">Prev</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-blue-500 text-white">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">4</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">5</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">...</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">21</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && selectedCustomer && (
          /* Customer Profile View */
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <button 
                  onClick={handleBackToCustomers}
                  className="mr-4 bg-black text-white p-2 rounded-md"
                >
                  <ArrowLeft size={16} />
                </button>
                <h1 className="text-2xl font-bold">Customers</h1>
              </div>
              <div className="flex space-x-2">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                  Select
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-semibold">Customer Information</h2>
                <button className="bg-black text-white px-3 py-1 rounded-md text-sm flex items-center">
                  <Edit size={14} className="mr-1" />
                  Edit
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Name</p>
                    <p>{selectedCustomer.name}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{selectedCustomer.email}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Phone No.</p>
                    <p>{selectedCustomer.phone}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{selectedCustomer.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold">Summary</h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-center text-gray-500 mb-2">Purchase</p>
                    <p className="text-center text-3xl font-bold">0</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-center text-gray-500 mb-2">Average Ticket</p>
                    <p className="text-center text-xl font-semibold">$0.00</p>
                  </div>
                  <div className="flex justify-end mt-6">
                    <div className="text-right">
                      <p className="text-gray-500">Total</p>
                      <p className="text-xl font-bold">$0.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold">Payment Methods</h2>
                  <button className="bg-black text-white px-3 py-1 rounded-md text-sm flex items-center">
                    Request Card/ACH
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm">Show</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <span className="text-sm">Entries</span>
                    
                    <div className="flex-1 flex justify-end">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Search..." 
                          className="border border-gray-300 rounded-md pl-3 pr-10 py-1.5 text-sm w-64"
                        />
                        <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Card Details</th>
                        <th className="px-4 py-2 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                          No data available in database
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <p>Showing 0 to 0 of 0 entries</p>
                    <div className="flex space-x-1">
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50">Prev</button>
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-gray-50">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold">Notes</h2>
                  <button className="bg-black text-white px-3 py-1 rounded-md text-sm flex items-center">
                    <Plus size={14} className="mr-1" />
                    Add
                  </button>
                </div>
                <div className="p-6 min-h-[100px] flex items-center justify-center text-gray-500">
                  No notes available
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold">Customer Signature With Disclosures</h2>
                  <button className="bg-black text-white px-3 py-1 rounded-md text-sm flex items-center">
                    Request Documents/Files
                  </button>
                </div>
                <div className="p-6 min-h-[100px] flex items-center justify-center text-gray-500">
                  No signature documents available
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden mt-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold">Frequent Items</h2>
              </div>
              <div className="p-6 min-h-[100px] flex items-center justify-center text-gray-500">
                No frequent items available
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;