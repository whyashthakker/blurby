'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { customerPortalAction } from '@/lib/payments/actions';
import { useActionState } from 'react';
import { TeamDataWithMembers, User } from '@/lib/db/schema';
import { removeTeamMember, inviteTeamMember } from '@/app/(login)/actions';
import { lifetimeCheckoutAction } from '@/lib/payments/actions';
import useSWR from 'swr';
import { Suspense, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, PlusCircle, Shield, Star, Key, Copy, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type ActionState = {
  error?: string;
  success?: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SubscriptionSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Subscription</CardTitle>
      </CardHeader>
    </Card>
  );
}

function LifetimeAccessContent() {
  const { data: licenseData } = useSWR('/api/user/license', fetcher);
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'lifetime_purchased') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [searchParams]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card className="mb-8 border-primary/20 relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10">
      {showSuccess && (
        <div className="absolute top-0 left-0 right-0 bg-green-500 text-white px-6 py-2 font-cal text-sm text-center">
          ✅ Lifetime access purchased successfully! Your license key is ready.
        </div>
      )}
      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 font-cal text-sm">
        {licenseData?.licenseKey ? 'Activated' : 'Limited Time'}
      </div>
      <CardHeader className={showSuccess ? 'mt-8' : ''}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10">
            {licenseData?.licenseKey ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Star className="w-6 h-6 text-primary" />
            )}
          </div>
          <div>
            <CardTitle className="font-cal text-2xl">
              {licenseData?.licenseKey ? 'Lifetime Access Active' : 'Get Lifetime Access'}
            </CardTitle>
            <p className="text-muted-foreground font-cal">
              {licenseData?.licenseKey ? 'You have lifetime protection' : 'One payment, forever protected'}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            {!licenseData?.licenseKey ? (
              <>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-cal text-primary">$19</span>
                  <div className="flex flex-col">
                    <span className="text-lg text-muted-foreground line-through">$49</span>
                    <span className="text-sm text-green-600 font-medium">Save $30</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>AI-powered sensitive data protection</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Key className="w-4 h-4 text-green-500" />
                    <span>Instant license key delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>Free lifetime updates</span>
                  </div>
                </div>
                <form action={lifetimeCheckoutAction}>
                  <Button className="w-full font-cal bg-primary hover:bg-primary/90" size="lg" type="submit">
                    Get Lifetime Access - $19
                  </Button>
                </form>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-cal">Lifetime access activated!</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Purchased on {new Date(licenseData.purchasedAt).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
          <div className="bg-background/80 rounded-lg p-4 border">
            <h4 className="font-cal text-lg mb-3 flex items-center gap-2">
              <Key className="w-5 h-5" />
              Your License Key
            </h4>
            {licenseData?.licenseKey ? (
              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-3 font-mono text-sm break-all relative">
                  {licenseData.licenseKey}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-1 right-1 h-6 w-6 p-0"
                    onClick={() => copyToClipboard(licenseData.licenseKey)}
                  >
                    {copied ? (
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>
                {copied && (
                  <p className="text-xs text-green-600 text-center">
                    License key copied to clipboard!
                  </p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  Use this key to activate Blurby on your devices
                </p>
              </div>
            ) : (
              <div>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm text-center text-muted-foreground">
                  Purchase to reveal your key
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  License key will be generated after successful payment
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LifetimeAccess() {
  return (
    <Suspense fallback={
      <Card className="mb-8 h-[300px]">
        <CardHeader>
          <CardTitle className="font-cal">Loading...</CardTitle>
        </CardHeader>
      </Card>
    }>
      <LifetimeAccessContent />
    </Suspense>
  );
}

function ManageSubscription() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="font-cal">Team Subscription</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <p className="font-medium font-cal">
                Current Plan: {teamData?.planName || 'Free'}
              </p>
              <p className="text-sm text-muted-foreground">
                {teamData?.subscriptionStatus === 'active'
                  ? 'Billed monthly'
                  : teamData?.subscriptionStatus === 'trialing'
                  ? 'Trial period'
                  : 'No active subscription'}
              </p>
            </div>
            <form action={customerPortalAction}>
              <Button type="submit" variant="outline" className="font-cal">
                Manage Subscription
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembersSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-4 mt-1">
          <div className="flex items-center space-x-4">
            <div className="size-8 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-14 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembers() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);
  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionState,
    FormData
  >(removeTeamMember, {});

  const getUserDisplayName = (user: Pick<User, 'id' | 'name' | 'email'>) => {
    return user.name || user.email || 'Unknown User';
  };

  if (!teamData?.teamMembers?.length) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-cal">Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No team members yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="font-cal">Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {teamData.teamMembers.map((member, index) => (
            <li key={member.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-cal">
                    {getUserDisplayName(member.user)
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium font-cal">
                    {getUserDisplayName(member.user)}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {member.role}
                  </p>
                </div>
              </div>
              {index > 1 ? (
                <form action={removeAction}>
                  <input type="hidden" name="memberId" value={member.id} />
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    className="font-cal"
                    disabled={isRemovePending}
                  >
                    {isRemovePending ? 'Removing...' : 'Remove'}
                  </Button>
                </form>
              ) : null}
            </li>
          ))}
        </ul>
        {removeState?.error && (
          <p className="text-red-500 mt-4">{removeState.error}</p>
        )}
      </CardContent>
    </Card>
  );
}

function InviteTeamMemberSkeleton() {
  return (
    <Card className="h-[260px]">
      <CardHeader>
        <CardTitle>Invite Team Member</CardTitle>
      </CardHeader>
    </Card>
  );
}

function InviteTeamMember() {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const isOwner = user?.role === 'owner';
  const [inviteState, inviteAction, isInvitePending] = useActionState<
    ActionState,
    FormData
  >(inviteTeamMember, {});

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-cal">Invite Team Member</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={inviteAction} className="space-y-4">
          <div>
            <Label htmlFor="email" className="mb-2 font-cal">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required
              disabled={!isOwner}
              className="font-cal"
            />
          </div>
          <div>
            <Label className="font-cal">Role</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-4"
              disabled={!isOwner}
            >
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="member" id="member" />
                <Label htmlFor="member" className="font-cal">Member</Label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner" className="font-cal">Owner</Label>
              </div>
            </RadioGroup>
          </div>
          {inviteState?.error && (
            <p className="text-red-500">{inviteState.error}</p>
          )}
          {inviteState?.success && (
            <p className="text-green-500">{inviteState.success}</p>
          )}
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-cal"
            disabled={isInvitePending || !isOwner}
          >
            {isInvitePending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inviting...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" />
                Invite Member
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {!isOwner && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            You must be a team owner to invite new members.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}

export default function SettingsPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/logo.svg"
          alt="Blurby"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <div>
          <h1 className="text-lg lg:text-2xl font-cal font-medium">Blurby Dashboard</h1>
          <p className="text-muted-foreground text-sm">Manage your privacy protection settings</p>
        </div>
      </div>
      
      <LifetimeAccess />
      
      <Suspense fallback={<SubscriptionSkeleton />}>
        <ManageSubscription />
      </Suspense>
      <Suspense fallback={<TeamMembersSkeleton />}>
        <TeamMembers />
      </Suspense>
      <Suspense fallback={<InviteTeamMemberSkeleton />}>
        <InviteTeamMember />
      </Suspense>
    </section>
  );
}
