
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { addParticipant, ParticipantType } from '@/store/slices/participantsSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddParticipant = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const [formData, setFormData] = useState({
    organizationName: '',
    shortName: '',
    type: 'Bank' as ParticipantType,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    dispatch(addParticipant({
      id: Date.now().toString(),
      ...formData,
      status: 'Pending'
    }));
    
    navigate('/dashboard');
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Add Participant</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>New Participant</CardTitle>
          <CardDescription>Enter the details for the new participant.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="organizationName">Organization Name</Label>
              <Input 
                id="organizationName" 
                name="organizationName" 
                value={formData.organizationName} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shortName">Short Name</Label>
              <Input 
                id="shortName" 
                name="shortName" 
                value={formData.shortName} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Participant Type</Label>
              <select 
                id="type" 
                name="type" 
                value={formData.type} 
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 h-10 text-sm"
                required
              >
                <option value="Bank">Bank</option>
                <option value="Third Party Provider">Third Party Provider</option>
              </select>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => navigate('/dashboard')}>
              Cancel
            </Button>
            <Button type="submit">Save Participant</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddParticipant;
