
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { Plus } from 'lucide-react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const { participants } = useAppSelector((state) => state.participants);
  
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All participants</h1>
        <Button asChild className="flex items-center gap-2">
          <Link to="/add-participant">
            <Plus size={18} /> Add Participant
          </Link>
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Organization Name</TableHead>
              <TableHead>Short Name</TableHead>
              <TableHead>Participant Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((participant) => (
              <TableRow key={participant.id}>
                <TableCell>{participant.organizationName}</TableCell>
                <TableCell>{participant.shortName}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`bg-purple-50 text-purple-700 hover:bg-purple-50 border-purple-100`}>
                    {participant.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`bg-orange-50 text-orange-500 hover:bg-orange-50 border-orange-100`}>
                    {participant.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
