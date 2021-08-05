import React from 'react'
import { useFormik } from 'formik';
import { Box, Input, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const AddRecipies = () => {
    const formik = useFormik({
        initialValues: {
          titel: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <Tabs variant="soft-rounded" colorScheme="red">
        <TabList>
          <Tab>Handmatig</Tab>
          <Tab>Automatisch</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Box display="flex" alignItems="left" justifyContent="space-between">
        <form onSubmit={formik.handleSubmit}>
          <label>Titel</label>
          <Input
            id="titel"
            name="titel"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.titel}
          />
    
          <label>Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
    
          <label>Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
    
          <Button type="submit">Submit</Button>
        </form>
        </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
          
      );
}

export default AddRecipies
